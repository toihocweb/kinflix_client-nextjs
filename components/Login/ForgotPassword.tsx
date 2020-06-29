import { UserOutlined } from '@ant-design/icons';
import { Button, Card, Col, Form, Input, Row } from 'antd';
import Head from 'next/head';
import React, { useState } from 'react';
import Error from '../Error';
import Header from '../Header';
import NavBack from '../NavBack';
import variable from '../styles/variable';
import { validatorRules } from '../utils/Rules';
import ChangePassword from './ChangePassword';
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

const ForgotPassword = (props) => {
    const [isChangePass, setIsChangePass] = React.useState(false);
    const [form] = Form.useForm();
    const [errorMessage, setErrorMessage] = useState('');
    const [processing, setProcessing] = useState(false);
    const [destinationEmail, setDestinationEmail] = useState();

    const onFinish = async (values) => {
        setProcessing(true);
        try {
            const resp = await authApi.forgotPassword(values.email);
            const destMail = resp.CodeDeliveryDetails.Destination;
            setDestinationEmail(values.email);
            alert(`認証コードを[${destMail}]に送信しました。`);
            form.resetFields();
            setErrorMessage('');
            setIsChangePass(true);
        } catch (error) {
            setErrorMessage(error.message);
        }
        setProcessing(false);
    };

    if (props.authState !== 'forgotPassword') {
        return <></>;
    }

    return (
        <>
            {isChangePass ? (
                <ChangePassword {...props}
                    email={destinationEmail} />
            ) : (
                <>
                    <Head>
                        <title>Techbiz Forgot Password</title>
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
                    `}</style>
                    <Header nav={<NavBack />} />
                    <div className="wrapper">
                        <main>
                            <div className="container">
                                <div className="">
                                    <h2 style={{ fontSize: 32 }}>認証コード送信</h2>
                                    <p>
                                    テックビズIDを入力して、認証コードをメールアドレスに送信してください。
                                    </p>
                                </div>
                                <div className="signup-form">
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
                                                    name="register"
                                                    layout="vertical"
                                                    onFinish={onFinish}
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
                                                        style={{
                                                            margin: 0,
                                                            textAlign: 'center',
                                                        }}
                                                    >
                                                        <Button type="link" onClick={onButtonSignInClicked}>
                                                            ログインページに戻る
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
                                                                認証コード送信
                                                            </Button>
                                                        )}
                                                    </Form.Item>
                                                </Form>
                                                {!!errorMessage && <Error message={errorMessage} />}
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </main>
                    </div>
                </>
            )}
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

export default ForgotPassword;
