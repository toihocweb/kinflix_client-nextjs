import React from 'react';

import Head from 'next/head';
import { Input, Card, Form, Checkbox, Button } from 'antd';
import { UserOutlined, SendOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Error from '../components/Error';
import { FunctionComponent } from 'react';

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

const Signup: FunctionComponent = () => {
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
                <title>NKC Sign Up</title>
            </Head>
            <style jsx>{`
                .wrapper {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-top: 40px;
                }
                main {
                    width: 460px;
                }
                span {
                    margin: 0px 6px;
                }
                .t-center {
                    text-align: center;
                    background: #27ae60;
                    padding: 10px;
                }
                .t-center h2,
                p {
                    color: white;
                }
            `}</style>
            <div className="wrapper">
                <main>
                    <div className="t-center">
                        <h2>新規会員登録</h2>
                        <p>
                            ご利用になるテックビズID（メールアドレス）を入力してください。
                        </p>
                    </div>

                    <Card hoverable style={{ cursor: 'unset' }}>
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
                                        message: '入力必須項目です。',
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
                                        message: '入力必須項目です。',
                                    },
                                ]}
                            >
                                <Input.Password size="large" />
                            </Form.Item>

                            <Form.Item
                                {...tailLayout}
                                name="remember"
                                valuePropName="checked"
                                rules={[
                                    {
                                        validator: (_, value) =>
                                            value
                                                ? Promise.resolve()
                                                : Promise.reject(''),
                                    },
                                ]}
                            >
                                <Checkbox>以下の規約に同意する</Checkbox>
                            </Form.Item>

                            <Form.Item>
                                <Link href="/">
                                    <a>テックビズ会員規約</a>
                                </Link>
                                <span>/</span>
                                <Link href="/">
                                    <a>個人情報保護方針</a>
                                </Link>
                                <span>/</span>
                                <Link href="/">
                                    <a>会員登録済みの場合</a>
                                </Link>
                            </Form.Item>

                            <Form.Item shouldUpdate>
                                {() => (
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        style={{ width: '100%' }}
                                        shape="round"
                                        size="large"
                                        className="btn-signup"
                                        disabled={
                                            !form.isFieldsTouched(true) ||
                                            form
                                                .getFieldsError()
                                                .filter(
                                                    ({ errors }) =>
                                                        errors.length
                                                ).length > 0
                                                ? true
                                                : false
                                        }
                                    >
                                        上記に同意して仮登録メールを送信
                                        <SendOutlined />
                                    </Button>
                                )}
                            </Form.Item>
                        </Form>
                        <Error message="Some error here" />
                    </Card>
                </main>
            </div>
        </>
    );
};

export default Signup;
