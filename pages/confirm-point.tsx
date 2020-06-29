import { Button, Checkbox, Form, Input } from 'antd';
import Head from 'next/head';
import React, { FunctionComponent } from 'react';
import Error from '../components/Error';
import Header from '../components/Header';
import NavBack from '../components/NavBack';
import variable from '../components/styles/variable';
import { validatorRules } from '../components/utils/Rules';
import { useRouter } from 'next/router';

const ConfirmPoint: FunctionComponent = () => {
    const [form] = Form.useForm();
    const router = useRouter();

    const onFinish = () => {};
    const onFinishFailed = () => {};
    React.useEffect(() => {
        form.setFieldsValue({
            score: router.query.point,
        });
        return () => {};
    }, [router]);

    return (
        <>
            <Head>
                <title>Techbiz Confirm Point</title>
            </Head>
            <style jsx>{`
                .wrapper {
                    margin-top: 30px;
                    padding-bottom: 125px;
                }
                .card {
                    padding: 30px;
                    width: 360px;
                    background: ${variable.cardBg};
                    border-top: 5px solid ${variable.primary};
                    margin: 0 auto;
                }
            `}</style>
            <Header nav={<NavBack top={true} />} />
            <div className="wrapper">
                <main>
                    <div className="container">
                        <div className="">
                            <h2
                                style={{
                                    margin: 0,
                                    fontSize: 32,
                                    marginBottom: 15,
                                    font: 'Bold 32px/44px meiryo',
                                }}
                            >
                                ポイント交換内容の確認
                            </h2>
                            <p style={{ fontSize: 16 }}>
                                交換を希望するポイント数をご確認のうえ、交換ボタンをクリックしてください。
                            </p>
                        </div>
                        <div className="confirm" style={{ marginTop: 28 }}>
                            <div className="card">
                                <p style={{ margin: 0, marginBottom: 17 }}>
                                    <img
                                        src="/images/detail_financialacademy.png"
                                        alt=""
                                    />
                                </p>
                                <Form
                                    name="confirm"
                                    layout="vertical"
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    form={form}
                                >
                                    <Form.Item
                                        label="交換ポイント数"
                                        name="score"
                                        rules={[validatorRules.Required]}
                                        shouldUpdate
                                    >
                                        <Input
                                            autoComplete="off"
                                            size="large"
                                            disabled
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        name="agree"
                                        valuePropName="checked"
                                        rules={[validatorRules.Checkbox]}
                                        style={{
                                            margin: 0,
                                            marginBottom: 30,
                                            marginTop: 17,
                                        }}
                                        className="checkbox"
                                    >
                                        <Checkbox>
                                            上記内容に間違いありません
                                        </Checkbox>
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
                                                    borderRadius: 5,
                                                    width: 300,
                                                    height: 60,
                                                }}
                                                shape="round"
                                                size="large"
                                                className="btn-signup"
                                                disabled={
                                                    !form.isFieldTouched(
                                                        'agree'
                                                    ) ||
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
                                                上記内容を確認の上、交換する
                                            </Button>
                                        )}
                                    </Form.Item>
                                </Form>
                                <Error message="Some error here" />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default ConfirmPoint;
