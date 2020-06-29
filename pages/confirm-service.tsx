import { IdcardOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Col, Form, Input, Row } from 'antd';
import Head from 'next/head';
import React, { FunctionComponent } from 'react';
import Error from '../components/Error';
import Header from '../components/Header';
import NavBack from '../components/NavBack';
import variable from '../components/styles/variable';
import { validatorRules } from '../components/utils/Rules';
import { useRouter } from 'next/router';

const layout = {
    labelCol: {
        span: 24,
    },
    wrapperCol: {
        span: 24,
    },
};

const Confirm: FunctionComponent = () => {
    const [form] = Form.useForm();
    const router = useRouter();
    React.useEffect(() => {
        form.setFieldsValue({
            service: router.query.service,
        });
        return () => {};
    }, [router]);

    const MyInput = (props) => <Input size="large" {...props} />;

    const onFinish = (values) => {};
    const onFinishFailed = (errorInfo) => {};

    return (
        <>
            <Head>
                <title>Techbiz Confirm Service</title>
            </Head>
            <style jsx>{`
                .wrapper {
                    margin-top: 40px;
                }
                .confirm-form {
                    margin-top: 40px;
                }
            `}</style>

            <Header nav={<NavBack top={true} />} />
            <div className="wrapper">
                <main>
                    <div className="container">
                        <div className="">
                            <h2
                                style={{
                                    fontSize: 32,
                                    fontFamily: 'meiryo-bold',
                                    margin: 0,
                                    marginBottom: 17,
                                }}
                            >
                                お申し込み内容の確認
                            </h2>
                            <p style={{ fontSize: 20 }}>
                                お申し込みご希望のサービス名・氏名・テックビズIDをご確認のうえ、お申し込みボタンをクリックしてください。{' '}
                            </p>
                        </div>
                        <div className="confirm-form">
                            <Row>
                                <Col
                                    xs={{
                                        offset: 0,
                                        span: 24,
                                    }}
                                    sm={{
                                        offset: 4,
                                        span: 16,
                                    }}
                                    md={{
                                        offset: 7,
                                        span: 10,
                                    }}
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
                                            onFinishFailed={onFinishFailed}
                                            form={form}
                                        >
                                            <Form.Item
                                                label="お申し込みサービス名"
                                                name="service"
                                            >
                                                <Input
                                                    autoComplete="off"
                                                    size="large"
                                                    placeholder="お申し込みサービス名"
                                                    disabled
                                                />
                                            </Form.Item>

                                            <Form.Item label="氏名" name="name">
                                                <Input
                                                    autoComplete="off"
                                                    size="large"
                                                    placeholder="氏名"
                                                    disabled
                                                />
                                            </Form.Item>

                                            <Form.Item
                                                label="テックビズID"
                                                name="identify"
                                            >
                                                <Input
                                                    autoComplete="off"
                                                    size="large"
                                                    placeholder="テックビズID"
                                                    disabled
                                                />
                                            </Form.Item>

                                            <Form.Item
                                                label="備考"
                                                name="msg"
                                                rules={[
                                                    validatorRules.Required,
                                                ]}
                                            >
                                                <Input.TextArea rows={5} />
                                            </Form.Item>

                                            <Form.Item
                                                shouldUpdate
                                                style={{ textAlign: 'center' }}
                                            >
                                                {() => (
                                                    <div className="action">
                                                        <Button
                                                            type="primary"
                                                            htmlType="submit"
                                                            size="large"
                                                            className="btn-signup"
                                                            style={{
                                                                width: '100%',
                                                                height: 50,
                                                            }}
                                                            disabled={
                                                                !form.isFieldTouched(
                                                                    'msg'
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
                                                            上記内容を確認の上、申し込む
                                                        </Button>
                                                    </div>
                                                )}
                                            </Form.Item>
                                        </Form>
                                        <Error message="Some error here" />
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

export default Confirm;
