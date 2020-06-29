import React, { FunctionComponent } from 'react';
import {
    Authenticator,
    Greetings,
    SignIn as AmplifySignIn,
    SignUp as AmplifySignUp,
    ConfirmSignUp as AmplifyConfirmSignUp,
    ForgotPassword as AmplifyForgotPassword
} from 'aws-amplify-react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import SignIn from './../components/Login/SignIn';
import SignUp from './../components/Login/SignUp';
import ConfirmSignUp from './../components/Login/ConfirmSignUp';
import ForgotPassword from './../components/Login/ForgotPassword';

interface LoginProps extends AppProps {}

const LoginPage: FunctionComponent<LoginProps> = () => {
    const router = useRouter();
    console.log(router.query);
    let authState: string = 'signIn';
    if (router.query?.authState === 'signUp') {
        authState = 'signUp';
    }

    return (
        <Authenticator
            authState={authState}
            onStateChange={onStateChange}
            hide={[
                Greetings,
                AmplifySignIn,
                AmplifySignUp,
                AmplifyConfirmSignUp,
                AmplifyForgotPassword
            ]}
        >
            <SignIn />
            <SignUp />
            <ConfirmSignUp />
            <ForgotPassword />
        </Authenticator>
    );

    /**
     * Method on state change
     * @param {string} authState authState
     */
    function onStateChange(authState) {
        if (authState === 'signedIn') {
            router.push('/top');
        }
    }
};

export default LoginPage;
