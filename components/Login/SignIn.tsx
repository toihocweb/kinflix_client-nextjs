import { SendOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Col, Form, Input, Row } from 'antd';
import Head from 'next/head';
import React, { useState } from 'react';
import Error from '../Error';
import Header from '../Header';
import NavBack from '../NavBack';
import variable from '../styles/variable';
import { validatorRules } from '../utils/Rules';
import authApi from './../../api/authApi';

const layout = {
    labelCol: {
        span: 24,
    },
    wrapperCol: {
        span: 24,
    },
};

const SignIn = (props) => {
    const [form] = Form.useForm();
    const [errorMessage, setErrorMessage] = useState('');
    const [processing, setProcessing] = useState(false);

    const onFinish = async (values) => {
        setProcessing(true);
        try {
            const response = await authApi.signIn(
                values.email,
                values.password
            );
            form.resetFields();
            setErrorMessage('');
            props.onStateChange('signedIn', response);
        } catch (error) {
            if (error.code === 'UserNotConfirmedException') {
                const isOk = window.confirm(`
こちらのメールアドレスでは「仮登録」まで手続きが完了しています。
こちらのメールアドレスを用いて「会員登録」の手続きを再開しますが、本当に宜しいでしょうか？
別のメールアドレスで会員登録したい場合は、「新規会員登録へ」のボタンを押下してください。                    
                `);
                if (isOk) {
                    form.resetFields();
                    props.onStateChange('confirmSignUp', {
                        email: values.email,
                        password: values.password,
                    });
                }
            } else {
                setErrorMessage(error.message);
            }
        }
        setProcessing(false);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    if (props.authState !== 'signIn') {
        return <></>;
    }

    return (
        <>
            <Head>
                <title>Techbiz Sign In</title>
            </Head>
            <style jsx>{`
                main {
                    margin: 20px 0px;
                }
                #form {
                    margin-top: 40px;
                }
                .form-title {
                    text-align: center;
                    margin-bottom: 30px;
                }
                .link-signup {
                    display: flex;
                    justify-content: flex-end;
                }
                .action {
                    width: 200px;
                    margin: auto;
                }
                @media (max-width: 500px) {
                    .action {
                        width: 95%;
                    }
                }
                h2 {
                    font-family: 'meiryo-bold';
                }
            `}</style>
            <Header nav={<NavBack />} />
            <div className="wrapper">
                <main>
                    <div className="container">
                        <div className="">
                            <h2
                                style={{
                                    fontSize: 32,
                                }}
                            >
                                テックビズポイントのご利用にはテックビズIDが必要です
                            </h2>
                            <p>
                                テックビズPOINTのご利用にはテックビズ会員への登録（テックビズIDの発行）が必要です。
                            </p>
                        </div>
                        <div id="form">
                            <Row gutter={[20, 10]}>
                                <Col
                                    xs={{ span: 20, offset: 2 }}
                                    md={{ span: 11, offset: 0 }}
                                >
                                    <Card
                                        bordered={false}
                                        hoverable
                                        style={{
                                            cursor: 'unset',
                                            background: `${variable.cardBg}`,
                                            borderTop: '5px solid #172B88',
                                            paddingTop: 6,
                                        }}
                                    >
                                        <div className="form-title">
                                            <h2 style={{ fontSize: 28 }}>
                                                テックビズIDをお待ちの方{' '}
                                            </h2>
                                            <p>
                                                お使いのID、パスワードでログインしてください。
                                            </p>
                                        </div>
                                        <Form
                                            {...layout}
                                            name="register"
                                            layout="vertical"
                                            onFinish={onFinish}
                                            onFinishFailed={onFinishFailed}
                                            form={form}
                                        >
                                            <Form.Item
                                                label="テックビズID(メールアドレス)"
                                                name="email"
                                                rules={[
                                                    validatorRules.Required,
                                                    validatorRules.Email,
                                                ]}
                                            >
                                                <Input
                                                    autoComplete="off"
                                                    size="large"
                                                    suffix={<UserOutlined />}
                                                />
                                            </Form.Item>

                                            <Form.Item
                                                label="パスワード"
                                                name="password"
                                                rules={[
                                                    validatorRules.Required,
                                                ]}
                                            >
                                                <Input.Password size="large" />
                                            </Form.Item>

                                            <Form.Item
                                                style={{ textAlign: 'right' }}
                                            >
                                                <Button
                                                    type="link"
                                                    onClick={
                                                        onButtonForgotPasswordClicked
                                                    }
                                                    className="link-signup"
                                                    style={{ paddingRight: 0 }}
                                                >
                                                    パスワード初期化
                                                </Button>
                                            </Form.Item>

                                            <Form.Item
                                                style={{ textAlign: 'center' }}
                                                shouldUpdate
                                            >
                                                {() => (
                                                    <Button
                                                        type="primary"
                                                        htmlType="submit"
                                                        style={{
                                                            display:
                                                                'inline-block',
                                                            width: '100%',
                                                            height: 50,
                                                            borderRadius: 5,
                                                        }}
                                                        shape="round"
                                                        size="large"
                                                        className="btn-signup"
                                                        disabled={
                                                            !form.isFieldsTouched(
                                                                true
                                                            ) ||
                                                            form
                                                                .getFieldsError()
                                                                .filter(
                                                                    ({
                                                                        errors,
                                                                    }) =>
                                                                        errors.length
                                                                ).length > 0
                                                                ? true
                                                                : false
                                                        }
                                                        loading={processing}
                                                    >
                                                        ログイン
                                                    </Button>
                                                )}
                                            </Form.Item>
                                        </Form>
                                        {!!errorMessage && (
                                            <Error message={errorMessage} />
                                        )}
                                    </Card>
                                </Col>
                                <Col
                                    xs={{ span: 20, offset: 2 }}
                                    md={{ span: 11, offset: 2 }}
                                >
                                    <Card
                                        bordered={false}
                                        style={{
                                            textAlign: 'center',
                                            paddingBottom: 50,
                                            borderTop: `5px solid #172B88`,
                                            paddingTop: 6,
                                            background: `${variable.cardBg}`,
                                        }}
                                    >
                                        <h2 style={{ fontSize: 28 }}>
                                            まだテックビズIDをお待ちでない方
                                        </h2>
                                        <p>
                                            テックビズ会員新規登録後、ポイントがご利用いただけます。
                                        </p>
                                        <div className="action">
                                            <Button
                                                type="primary"
                                                style={{
                                                    marginTop: 20,
                                                    width: '100%',
                                                    height: 50,
                                                    borderRadius: 5,
                                                }}
                                                onClick={onButtonSignUpClicked}
                                            >
                                                新規会員登録へ
                                            </Button>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );

    /**
     * Method on button sign up clicked
     */
    function onButtonSignUpClicked() {
        form.resetFields();
        setErrorMessage('');
        props.onStateChange('signUp');
    }

    /**
     * Method on button forgot password clicked
     */
    function onButtonForgotPasswordClicked() {
        form.resetFields();
        setErrorMessage('');
        props.onStateChange('forgotPassword', {});
    }
};

export default SignIn;
