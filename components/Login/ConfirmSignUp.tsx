import { SendOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Col, Form, Input, Row } from 'antd';
import Head from 'next/head';
import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
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

const ConfirmSignUp = (props) => {
    const [form] = Form.useForm();
    const [errorMessage, setErrorMessage] = useState('');
    const [processing, setProcessing] = useState(false);
    const [processingResend, setProcessingResend] = useState(false);
    const email = getEmail();
    const MyInput = (props) => <Input size="large" {...props} />;
    const onFinish = async (values) => {
        setProcessing(true);
        console.log(values);
        try {
            await authApi.confirmSignUp(values);
            alert('アカウント認証に成功しました。');
            form.resetFields();
            setErrorMessage('');
            props.onStateChange('signIn');
        } catch (error) {
            setErrorMessage(error.message);
        }
        setProcessing(false);
    };

    if (props.authState !== 'confirmSignUp') {
        return <></>;
    }

    return (
        <>
            <Head>
                <title>Techbiz Sign Up</title>
            </Head>
            <style jsx>{`
                .wrapper {
                    margin-top: 40px;
                }
                span {
                    margin: 0px 6px;
                }
                .signup-form {
                    margin-top: 40px;
                }
                h2,
                p {
                    margin: 0;
                }
                h2 {
                    margin-bottom: 20px;
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
                                    fontFamily: 'meiryo-bold',
                                }}
                            >
                                新規会員登録(認証コード入力)
                            </h2>
                            <p>
                                以下のメールアドレス宛に認証コードを記載したメールを送信しました。
                            </p>
                            <p style={{ marginBottom: 50 }}>
                                メール本文の認証コードを入力し、会員登録を完了させてください。
                            </p>
                        </div>
                        <div className="verify-form">
                            <Row>
                                <Col
                                    xs={{ span: 20, offset: 2 }}
                                    sm={{ span: 16, offset: 4 }}
                                    md={{ span: 10, offset: 7 }}
                                >
                                    <Card
                                        bordered={false}
                                        hoverable
                                        style={{
                                            cursor: 'unset',
                                            borderTop: '5px solid #172B88',
                                            background: `${variable.cardBg}`,
                                        }}
                                    >
                                        <Form
                                            {...layout}
                                            name="verify"
                                            layout="vertical"
                                            onFinish={onFinish}
                                            form={form}
                                        >
                                            <Form.Item
                                                label="メールアドレス"
                                                name="username"
                                                initialValue={email}
                                            >
                                                <Input
                                                    autoComplete="off"
                                                    size="large"
                                                    placeholder="123123@gmail.com"
                                                    suffix={<UserOutlined />}
                                                    disabled
                                                />
                                            </Form.Item>

                                            <Form.Item
                                                label="認証コード"
                                                name="code"
                                                rules={[
                                                    validatorRules.Required,
                                                ]}
                                            >
                                                <NumberFormat
                                                    isNumericString
                                                    allowNegative={false}
                                                    decimalScale={0}
                                                    format="######"
                                                    placeholder="123456"
                                                    customInput={MyInput}
                                                />
                                            </Form.Item>

                                            <Form.Item
                                                style={{ textAlign: 'center' }}
                                            >
                                                <Button
                                                    onClick={
                                                        onButtonSignInClicked
                                                    }
                                                    type="link"
                                                    style={{ float: 'left' }}
                                                >
                                                    ログインページに戻る
                                                </Button>
                                                <Button
                                                    onClick={
                                                        onButtonResendClicked
                                                    }
                                                    loading={processingResend}
                                                >
                                                    認証コード再送{' '}
                                                </Button>
                                            </Form.Item>

                                            <Form.Item
                                                shouldUpdate
                                                style={{ textAlign: 'center' }}
                                            >
                                                {() => (
                                                    <Button
                                                        type="primary"
                                                        htmlType="submit"
                                                        style={{
                                                            width: 320,
                                                            height: 50,
                                                        }}
                                                        size="large"
                                                        className="btn-signup"
                                                        disabled={
                                                            !form.isFieldTouched(
                                                                'code'
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
                                                        登録を完了させてマイページへ
                                                    </Button>
                                                )}
                                            </Form.Item>
                                        </Form>
                                        {!!errorMessage && (
                                            <Error message={errorMessage} />
                                        )}
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
     * Method get email
     * @return {string} email
     */
    function getEmail() {
        if (!!props.authData) {
            if (!!props.authData.user && !!props.authData.user.username) {
                return props.authData.user.username;
            } else if (!!props.authData.email) {
                return props.authData.email;
            }
        }

        return '';
    }

    /**
     * Method on button sign in clicked
     */
    function onButtonSignInClicked() {
        form.resetFields();
        setErrorMessage('');
        props.onStateChange('signIn');
    }

    /**
     * Method on button resend clicked
     */
    async function onButtonResendClicked() {
        setProcessingResend(true);
        try {
            const resp = await authApi.resendSignUp(getEmail());
            const destMail = resp.CodeDeliveryDetails.Destination;
            alert(`認証コードを[${destMail}]に再度送信しました。`);
        } catch (error) {
            setErrorMessage(error.message);
        }
        setProcessingResend(false);
    }
};

export default ConfirmSignUp;
