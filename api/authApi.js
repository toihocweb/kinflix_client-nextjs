import { Auth } from 'aws-amplify';

const UserPoolId = process.env.REACT_APP_USER_POOL_ID;

const errorMessageList = {
    UserNotFoundException:
        'こちらのメールアドレスでは会員登録が完了していない可能性があります。',
    UsernameExistsException:
        'テックビズ会員退会時に使用していたメールアドレスで会員登録はできません。他のメールアドレスで会員登録してください。',
    InvalidPasswordException:
        'パスワードには英小文字と数字のそれぞれを最低1文字以上含める必要があります。',
    CodeMismatchException: '入力された検証コードが間違っています。',
    LimitExceededException:
        'ログイン試行やコード検証試行の回数の上限に達しました。',
};

// #region Sign In function
/**
 * execute sign in
 * @async @function
 * @param {string} username string
 * @param {string} password string
 * @return {object} resp
 */
const signIn = async (username, password) => {
    const resp = await Auth.signIn({
        username,
        password,
    }).catch((error) => {
        console.error('Auth.signIn:err=', error);
        if (errorMessageList[error.code] !== undefined) {
            throw Error(errorMessageList[error.code]);
        } else if (error.code === 'NotAuthorizedException') {
            if (error.message === 'Incorrect username or password.') {
                throw Error(
                    'メールアドレスかパスワードが正しくない可能性があります。'
                );
            } else if (error.message === 'User is disabled.') {
                throw Error(
                    'こちらのメールアドレスは退会時に使用していたメールアドレスの為、別のメールアドレスで会員登録してください。'
                );
            } else {
                throw error;
            }
        } else if (
            error.message === "'fetch' は定義されていません。" ||
            error.message === "'fetch' is undefined"
        ) {
            throw Error('ご利用のブラウザは対応しておりません。');
        }
        throw error;
    });
    console.info('Auth.signIn:resp=', resp);

    return resp;
};
// #endregion

// #region Sign Up function
/**
 * sign up with username, email, password
 * @async @function
 * @param {object} params params
 * @return {object} resp
 */
const signUp = async (params) => {
    const { password, username, email, tbIdShortId } = params;
    const signUpParams = {
        username,
        password,
        attributes: {
            email,
            'custom:tb_id_short_id': tbIdShortId,
        },
    };
    const resp = await Auth.signUp(signUpParams).catch((error) => {
        console.error('Auth.signUp:err=', error);
        if (errorMessageList[error.code] !== undefined) {
            throw Error(errorMessageList[error.code]);
        } else if (
            error.message === "'fetch' は定義されていません。" ||
            error.message === "'fetch' is undefined"
        ) {
            throw new Error('ご利用のブラウザは対応しておりません。');
        }
        throw error;
    });

    return resp;
};

/**
 * send the verfication code to confirm sign up
 * @async @function
 * @param {object} params { username, code }
 * @return {object} resp
 */
const confirmSignUp = async (params) => {
    const { username, code } = params;
    const resp = await Auth.confirmSignUp(username, code).catch((error) => {
        console.error('Auth.confirmSignUp:err=', error);
        if (errorMessageList[error.code] !== undefined) {
            throw Error(errorMessageList[error.code]);
        }
        throw error;
    });

    return resp;
};

/**
 * Resend the verification code
 * @async @function
 * @param {object} username username string
 * @return {object} resp
 */
const resendSignUp = async (username) => {
    const resp = await Auth.resendSignUp(username).catch((err) => {
        console.error('Auth.resendSignUp:err=', err);
        throw err;
    });

    return resp;
};
// #endregion

// #region Sign Out function
/**
 * execute sign out
 * @async @function
 * @return {void}
 */
const signOut = async () => {
    await Auth.signOut().catch((err) => {
        console.error('Auth.signOut:err=', err);
        throw err;
    });
};
// #endregion

// #region Get Info
/**
 * get current user's session
 * @async @function
 * @return {object} resp
 */
const getCurrentSession = async () => {
    const resp = await Auth.currentSession().catch((err) => {
        console.error('Auth.currentSession:err=', err);
        throw err;
    });

    return resp;
};

/**
 * get current authenticated user
 * @async @function
 * @return {object} resp
 */
const getCurrentAuthenticatedUser = async () => {
    const resp = await Auth.currentAuthenticatedUser().catch((err) => {
        console.error('Auth.currentAuthenticatedUser:err=', err);
        throw err;
    });

    return resp;
};
// #endregion

// #region Forgot password function
/**
 * initiate a forgot password request
 * send the verfication code to execute forgotPasswordSubmit api
 * @async @function
 * @param {object} username username string
 * @return {object} resp
 */
const forgotPassword = async (username) => {
    const resp = await Auth.forgotPassword(username).catch((error) => {
        console.error('Auth.forgotPassword:err=', error);
        if (errorMessageList[error.code] !== undefined) {
            throw Error(errorMessageList[error.code]);
        } else if (error.code === 'InvalidParameterException') {
            if (
                error.message ===
                'Cannot reset password for the user as there is no registered/verified email or phone_number'
            ) {
                throw new Error(
                    'アカウントは認証しないメールとか電話番号の場合、パスワードがリセットできません。'
                );
            }
        } else if (error.code === 'NotAuthorizedException') {
            if (error.message === 'User is disabled.') {
                throw new Error(
                    'こちらのメールアドレスは退会時に使用していたメールアドレスの為、別のメールアドレスで会員登録してください。'
                );
            }
        } else if (
            error.message === "'fetch' は定義されていません。" ||
            error.message === "'fetch' is undefined"
        ) {
            throw new Error('ご利用のブラウザは対応しておりません。');
        }
        throw error;
    });

    return resp;
};

/**
 * confirm a new password using a confirmation Code
 * @async @function
 * @param {object} params { username, code, password }
 * @return {object} resp
 */
const forgotPasswordSubmit = async (params) => {
    const { username, code, password } = params;
    const resp = await Auth.forgotPasswordSubmit(
        username,
        code,
        password
    ).catch((error) => {
        console.error('Auth.forgotPasswordSubmit:err=', error);
        if (errorMessageList[error.code] !== undefined) {
            throw Error(errorMessageList[error.code]);
        }
        throw error;
    });

    return resp;
};
// #endregion

export default {
    signIn,
    signUp,
    confirmSignUp,
    resendSignUp,
    signOut,
    getCurrentSession,
    getCurrentAuthenticatedUser,
    forgotPassword,
    forgotPasswordSubmit
};
