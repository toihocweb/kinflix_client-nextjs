import React from 'react';

import Head from 'next/head';
import { Input, Card, Form, Checkbox, Button, Row, Col } from 'antd';
import { UserOutlined, SendOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Error from '../components/Error';
import { FunctionComponent } from 'react';
import variable from '../components/styles/variable';

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

const Signin: FunctionComponent = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Head>
                <title>NKC Sign In</title>
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
            `}</style>
            <div className="wrapper">
                <main>
                    <div className="container">
                        <div className="">
                            <h2>
                                テックビズPOINTのご利用にはテックビズIDが必要です
                            </h2>
                            <p>
                                テックビズPOINTのご利用にはテックビズ会員への登録（テックビズIDの発行）が必要です。
                            </p>
                        </div>
                        <div className="" id="form">
                            <Row gutter={[20, 10]}>
                                <Col
                                    sm={{ span: 20, offset: 2 }}
                                    md={{ span: 11, offset: 0 }}
                                >
                                    <Card hoverable style={{ cursor: 'unset' }}>
                                        <div className="form-title">
                                            <h2>テックビズIDをお待ちの方 </h2>
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
                                                label="テックビズID
                                (メールアドレス)
                                "
                                                name="email"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            '入力必須項目です。',
                                                    },
                                                    {
                                                        type: 'email',
                                                        message:
                                                            '入力されたメールアドレスに間違いがあります。',
                                                    },
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
                                                    {
                                                        required: true,
                                                        message:
                                                            '入力必須項目です。',
                                                    },
                                                ]}
                                            >
                                                <Input.Password size="large" />
                                            </Form.Item>

                                            <Form.Item>
                                                <Link href="/signup">
                                                    <a className="link-signup">
                                                        パスワード初期化
                                                    </a>
                                                </Link>
                                            </Form.Item>

                                            <Form.Item shouldUpdate>
                                                {() => (
                                                    <Button
                                                        type="primary"
                                                        htmlType="submit"
                                                        style={{
                                                            width: '100%',
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
                                                    >
                                                        ログイン
                                                        <SendOutlined />
                                                    </Button>
                                                )}
                                            </Form.Item>
                                        </Form>
                                        <Error message="Some error here" />
                                    </Card>
                                </Col>
                                <Col
                                    sm={{ span: 20, offset: 2 }}
                                    md={{ span: 11, offset: 1 }}
                                >
                                    <Card
                                        style={{
                                            textAlign: 'center',
                                            paddingBottom: 50,
                                            boxShadow: `0px 0px 4px -1px ${variable.primary}`,
                                            border: `1px solid ${variable.primary}`,
                                        }}
                                    >
                                        <h2>
                                            まだテックビズIDをお待ちでない方
                                        </h2>
                                        <p>
                                            テックビズ会員新規登録後、ポイントがご利用いただけます。
                                        </p>
                                        <Button
                                            type="primary"
                                            style={{
                                                marginTop: 20,
                                                width: 300,
                                                height: 50,
                                            }}
                                        >
                                            <Link href="/signup">
                                                <a href="">新規会員登録へ</a>
                                            </Link>
                                        </Button>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Signin;
