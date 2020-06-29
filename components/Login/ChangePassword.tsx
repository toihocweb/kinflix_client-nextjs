import { UserOutlined } from '@ant-design/icons';
import { Button, Card, Col, Form, Input, Row } from 'antd';
import Head from 'next/head';
import React, { useState } from 'react';
import Error from '../Error';
import Header from '../Header';
import NavBack from '../NavBack';
import variable from '../styles/variable';
import { validatorRules } from '../utils/Rules';
import authApi from './../../api/authApi';
import NumberFormat from 'react-number-format';

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

const MyInput = (props) => <Input size="large" {...props} />;

const ChangePassword = (props) => {
    const [form] = Form.useForm();
    const [errorMessage, setErrorMessage] = useState('');
    const [processing, setProcessing] = useState(false);

    const onFinish = async (values) => {
        setProcessing(true);
        try {
            const params = {
                username: props.email,
                code: values.code,
                password: values.password
            };
            await authApi.forgotPasswordSubmit(params);
            form.resetFields();
            setErrorMessage('');
            alert('パスワードを変更しました。');
            props.onStateChange('signIn');
        } catch (error) {
            setErrorMessage(error.message);
        }
        setProcessing(false);
    };

    return (
        <>
            <Head>
                <title>Techbiz Forgot Password Confirmation</title>
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
                            <h2 style={{ fontSize: 32 }}>パスワード変更</h2>
                            <p>
                                認証コードとパスワードを入力してください。<br />
                                パスワードの必須要件は以下の通りです。
                            </p>
                            <ol style={{ paddingLeft: 15 }}>
                                <li>8文字以上である</li>
                                <li>半角英数字である</li>
                            </ol>
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
                                            name="changePassword"
                                            layout="vertical"
                                            onFinish={onFinish}
                                            form={form}
                                        >
                                            <Form.Item
                                                label="テックビズID(認証コード)"
                                                name="code"
                                                rules={[
                                                    validatorRules.Required
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
                                                label="新しいパスワード"
                                                name="password"
                                                style={{ margin: '20px 0px 10px 0px' }}
                                                rules={[
                                                    { required: true, message: '入力必須項目です。' },
                                                    { min: 8, message: 'パスワードは8桁以上必要です。' },
                                                    {
                                                        pattern: new RegExp('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).+$'),
                                                        message: '書式が正しくありません。'
                                                    },
                                                ]}
                                                validateFirst
                                            >
                                                <Input.Password size="large" style={{ background: 'white '}} />
                                            </Form.Item>
                                            <Form.Item
                                                label="パスワード(確認用)"
                                                name="confirmPassword"
                                                style={{ margin: '20px 0px 10px 0px' }}
                                                validateFirst
                                                rules={[
                                                    { required: true, message: '入力必須項目です。' },
                                                    ({ getFieldValue }) => ({
                                                        validator(rule, value) {
                                                            if (!value || getFieldValue('password') === value) {
                                                                return Promise.resolve();
                                                            }

                                                            return Promise.reject(
                                                                '入力パスワードと確認パスワードが一致していません。'
                                                            );
                                                        },
                                                    }),
                                                ]}
                                                dependencies={['password']}
                                            >
                                                <Input.Password size="large" style={{ background: 'white '}} />
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

export default ChangePassword;
