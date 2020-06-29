import { Button, Col, Input, Row } from 'antd';
import Head from 'next/head';
import React, { FunctionComponent } from 'react';
import Header from '../components/Header';
import NavBack from '../components/NavBack';
import Router from 'next/router';
import variable from '../components/styles/variable';

const ChangePoint: FunctionComponent = () => {
    const [point, setPoint] = React.useState<string>('');
    const changePoint = (e) => {
        setPoint(e.target.value);
    };

    const handleToConfirm = () => {
        if (point) {
            Router.push(`/confirm-point?point=${point}`);
        } else {
            return;
        }
    };
    return (
        <>
            <Head>
                <title>Techbiz Change Point</title>
            </Head>
            <style jsx>{`
                .wrapper {
                    margin-top: 40px;
                }
                .action {
                    width: 400px;
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
                .card {
                    background: ${variable.cardBg};
                    border-top: 5px solid #172b88;
                    width: 989px;
                    margin: 55px auto 154px;
                    padding: 30px 30px 50px;
                }
                @media (max-width: 1000px) {
                    .card {
                        width: 98%;
                    }
                }

                .left img {
                    width: 300px;
                }

                .right {
                    margin-left: -20px;
                }
                @media (max-width: 992px) {
                    .right {
                        margin-left: 20px;
                    }
                }
                @media (max-width: 768px) {
                    .right {
                        margin-top: 20px;
                        margin-left: 0px;
                    }
                }
            `}</style>
            <Header nav={<NavBack top={true} />} />
            <div className="wrapper">
                <main>
                    <div className="container">
                        <div className="change">
                            <h2>ポイント交換</h2>
                            <p>
                                お持ちのテックビズポイントをAmazonのギフト券に交換していただけます。
                                <br />
                                ※交換申し込み後の変更・キャンセルは一切できませんのであらかじめご了承ください。
                            </p>
                            <div className="card">
                                <Row>
                                    <Col
                                        sm={{ span: 24 }}
                                        md={{
                                            span: 8,
                                        }}
                                        lg={{
                                            span: 9,
                                        }}
                                    >
                                        <div className="left">
                                            <p>
                                                <img
                                                    src="/images/amazon@2x.png"
                                                    alt=""
                                                />
                                            </p>
                                        </div>
                                        <div
                                            style={{
                                                marginLeft: 30,
                                                marginTop: 42,
                                            }}
                                            className="input-group"
                                        >
                                            <Input
                                                size="large"
                                                style={{ width: 144 }}
                                                placeholder="交換ポイント"
                                                value={point}
                                                onChange={changePoint}
                                            />
                                            <span style={{ marginLeft: 20 }}>
                                                ポイント
                                            </span>
                                        </div>
                                    </Col>
                                    <Col md={16} lg={15}>
                                        <div className="right">
                                            <p>
                                                ※テックビズ会員を退会される場合には、受け取りが完了するまでお待ちください。ポイント交換のお手続きが正常に完了しないことがあります。
                                                <br />
                                                ※ご登録のごメールアドレスへお届けいたします。メールアドレスが変更になっているかたは、先に変更のお手続きをお願いします。
                                                <br />
                                                ※年末年始、GW、お盆時期等はお届けに時間がかかる場合がございます。ご了承ください。
                                                <br />
                                                ※数量は最大100000ポイントまで入力いただけます。上記以上を希望の場合は複数回のご入力をお願いいたします。
                                                <br />
                                                ※お申し込み後の変更、キャンセルは一切できません。
                                                <br />
                                            </p>
                                        </div>
                                    </Col>
                                </Row>

                                <div
                                    className="action"
                                    style={{
                                        textAlign: 'center',
                                        marginTop: 50,
                                    }}
                                >
                                    <Button
                                        style={{
                                            width: '100%',
                                            margin: 'auto',
                                            height: 50,
                                            borderRadius: 10,
                                            boxShadow: '5px 5px 10px #0000004D',
                                            fontFamily: 'meiryo-bold',
                                        }}
                                        size="large"
                                        type="primary"
                                        onClick={handleToConfirm}
                                    >
                                        入力内容の確認に進む
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default ChangePoint;
