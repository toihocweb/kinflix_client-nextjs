import { UserOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Col, Form, Input, Row } from 'antd';
import Head from 'next/head';
import React, { useState } from 'react';
import Error from '../Error';
import Header from '../Header';
import NavBack from '../NavBack';
import variable from '../styles/variable';
import { validatorRules } from '../utils/Rules';
import cryptoRandomString from 'crypto-random-string';
import authApi from './../../api/authApi';

const layout = {
    labelCol: {
        span: 24,
    },
    wrapperCol: {
        span: 24,
    },
};
const tailLayout = {
    wrapperCol: {
        span: 12,
    },
};

const SignUp = (props) => {
    const [form] = Form.useForm();
    const [errorMessage, setErrorMessage] = useState('');
    const [processing, setProcessing] = useState(false);

    const onFinish = async (values) => {
        setProcessing(true);
        try {
            let tbId = values.email.replace(/\s+/g, '');
            tbId = tbId.replace(/＠/g, '@');
            const username = tbId;
            const email = tbId;
            const password = values.password;
            const tbIdShortId = cryptoRandomString({
                length: 10,
                characters: '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            });
            const params = {
                password,
                username,
                email,
                tbIdShortId,
            };
            const resp = await authApi.signUp(params);
            const destMail = resp.codeDeliveryDetails.Destination;
            alert(`認証コードを[${destMail}]に送信しました。`);
            form.resetFields();
            setErrorMessage('');
            props.onStateChange('confirmSignUp', resp);
        } catch (error) {
            setErrorMessage(error.message);
        }
        setProcessing(false);
    };

    if (props.authState !== 'signUp') {
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
                    width: 500px;
                    margin: 40px auto 0px;
                }
                @media (max-width: 500px) {
                    .signup-form {
                        width: 98%;
                    }
                }
                .btn-signup {
                    margin: auto;
                    width: 320px;
                }
                @media (max-width: 768px) {
                    .btn-signup {
                        width: 100%;
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
                            <h2 style={{ fontSize: 32 }}>新規会員登録</h2>
                            <p>
                                ご利用になるメールアドレスを入力してください。
                            </p>
                        </div>
                        <div className="signup-form">
                            <Row>
                                <Col xs={{ span: 24 }}>
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
                                            name="register"
                                            layout="vertical"
                                            onFinish={onFinish}
                                            form={form}
                                        >
                                            <Form.Item
                                                label="テックビズID
                                (メールアドレス)
                                "
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
                                                style={{
                                                    all: 'unset',
                                                    margin: '27px 0px 19px',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                <a
                                                    href="https://terms.tech-biz.jp/#techbiz_terms_of_use"
                                                    target="_blank"
                                                    style={{ marginRight: 43 }}
                                                >
                                                    テックビズ会員規約
                                                </a>
                                                <a
                                                    href="https://terms.tech-biz.jp/#techbiz_privacy_policy"
                                                    target="_blank"
                                                >
                                                    個人情報保護方針
                                                </a>
                                            </Form.Item>
                                            <Form.Item
                                                {...tailLayout}
                                                name="remember"
                                                valuePropName="checked"
                                                rules={[
                                                    validatorRules.Checkbox,
                                                ]}
                                                style={{
                                                    margin: 0,
                                                }}
                                                className="checkbox"
                                            >
                                                <Checkbox
                                                    className="label-checkbox"
                                                    style={{
                                                        fontFamily:
                                                            'meiryo-bold',

                                                        marginLeft: 154,
                                                        width: 172,
                                                    }}
                                                >
                                                    上記規約に同意する
                                                </Checkbox>
                                            </Form.Item>

                                            <Form.Item
                                                style={{
                                                    margin: 0,
                                                    textAlign: 'center',
                                                }}
                                            >
                                                <Button
                                                    type="link"
                                                    onClick={
                                                        onButtonSignInClicked
                                                    }
                                                >
                                                    すでに会員の方はこちら
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
                                                            width: 350,
                                                            height: 50,
                                                        }}
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
                                                        上記に同意して仮登録メールを送信する
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
     * Method button sign in clicked
     */
    function onButtonSignInClicked() {
        form.resetFields();
        setErrorMessage('');
        props.onStateChange('signIn');
    }
};

export default SignUp;
