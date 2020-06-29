import { Button } from 'antd';
import Head from 'next/head';
import React, { FunctionComponent } from 'react';
import Header from '../components/Header';
import variable from '../components/styles/variable';
import Router from 'next/router';

const ThanksPoint: FunctionComponent = () => {
    return (
        <>
            <Head>
                <title>Techbiz Thanks Point</title>
            </Head>
            <style jsx>{`

                .wrapper {
                    margin-top: 50px;
                    padding-bottom: 223px;
                }
                .thanks-point {
                    display: flex;
                    justify-content: center;
                }
                .card {
                    padding 50px 34px;
                    width: 600px;
                    background: ${variable.cardBg};
                    border-top : 5px solid ${variable.primary};
                    text-align: center;
                }
               
              
                .action {
                    width: 400px;
                    margin: auto;
                }
                
                @media (max-width: 600px) {
                    .card {
                        width: 98%;
                    }
                    .action {
                        width :100%;
                    }
                }
               
              
            `}</style>
            <Header />
            <div className="wrapper">
                <main>
                    <div className="container">
                        <div className="thanks-point">
                            <div className="card">
                                <h2
                                    style={{
                                        fontFamily: 'meiryo-bold',
                                        fontSize: 29,
                                        marginBottom: 20,
                                    }}
                                >
                                    ポイント交換のお申し込みが完了しました
                                </h2>
                                <p
                                    style={{
                                        margin: '0px  auto 30px',
                                    }}
                                >
                                    ご登録のメールアドレスにお申し込み内容の確認メールを送付しております。
                                    <br />
                                    そちらからお申し込み内容をご確認いただけます。
                                </p>
                                <div className="action">
                                    <Button
                                        style={{
                                            width: '100%',
                                            margin: 'auto',
                                            height: 50,
                                            borderRadius: 10,
                                            boxShadow: '5px 5px 10px #0000004D',
                                        }}
                                        size="large"
                                        type="primary"
                                        className="btn-thanks"
                                        onClick={() => Router.push('/top')}
                                    >
                                        マイページへ戻る
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

export default ThanksPoint;
