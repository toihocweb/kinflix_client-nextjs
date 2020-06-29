import { Button } from 'antd';
import Head from 'next/head';
import React, { FunctionComponent } from 'react';
import Header from '../components/Header';
import variable from '../components/styles/variable';
import Router from 'next/router';

const layout = {
    labelCol: {
        span: 24,
    },
    wrapperCol: {
        span: 24,
    },
};

const Thanks: FunctionComponent = () => {
    return (
        <>
            <Head>
                <title>Techbiz Thanks</title>
            </Head>
            <style jsx>{`

                .wrapper {
                    margin-top: 40px;
                    padding-bottom: 200px;
                }
                .thanks {
                    display: flex;
                    justify-content: center;
                }
                .card {
                    padding 50px 16px;
                    max-width: 500px;
                    background: ${variable.cardBg};
                    border-top : 5px solid ${variable.primary};
                    text-align: center;
                }
                .action {
                    width: 400px;
                    margin: auto;
                }
                @media (max-width: 500px) {
                    .card {
                        width: 98%;
                    }
                    .action {
                        width :100%;
                    }
                }
                
                .card h2 {
                    font-size: 32px;
                }
                p {
                    text-align: center;
                    font: Regular 16px/24px Meiryo UI;
                    letter-spacing: 0px;
                    color: #3E3E3E;
                    opacity: 1;
                }
                
              
            `}</style>
            <Header />
            <div className="wrapper">
                <main>
                    <div className="container">
                        <div className="thanks">
                            <div className="card">
                                <h2>お申し込みが完了しました</h2>
                                <p>
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

export default Thanks;
