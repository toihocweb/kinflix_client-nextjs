import { Button } from 'antd';
import Head from 'next/head';
import React, { FunctionComponent } from 'react';
import Header from '../components/Header';
import NavBack from '../components/NavBack';
import variable from '../components/styles/variable';

const History: FunctionComponent = () => {
    const [list, setList] = React.useState([
        {
            id: 1,
            content:
                '2020/06/17 100ポイント付与 5月度テックビズフリーランス参画特典',
        },
        {
            id: 2,
            content: '2020/06/17 5000ポイント使用 Amazonギフト券交換',
        },
        {
            id: 3,
            content:
                '2020/05/17 100ポイント付与 4月度テックビズフリーランス参画特典',
        },
        {
            id: 4,
            content:
                '2020/04/17 100ポイント付与 3月度テックビズフリーランス参画特典',
        },
        {
            id: 5,
            content:
                '2020/03/17 100ポイント付与 2月度テックビズフリーランス参画特典',
        },
    ]);
    return (
        <>
            <Head>
                <title>Techbiz History Point</title>
            </Head>
            <style jsx>{`
                .wrapper {
                    margin-top: 40px;
                }
                .history {
                    margin-top: 30px;
                    display: flex;
                    justify-content: center;
                }
                .card {
                    padding: 22px 50px 50px;
                    width: 800px;
                    background: ${variable.cardBg};
                    border-top: 5px solid ${variable.primary};
                }
                @media (max-width: 500px) {
                    .action {
                        width: 95%;
                        margin: auto;
                    }
                }
                ul {
                    padding: 0;
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
                                    marginBottom: 15,
                                }}
                            >
                                ポイント履歴
                            </h2>
                            <p>
                                ポイントの付与・使用の履歴を御確認いただけます。{' '}
                            </p>
                        </div>
                        <div className="history">
                            <div className="card">
                                <ul>
                                    {list.map((item) => (
                                        <li
                                            key={item.id}
                                            style={{
                                                padding: '13px 0px 15px',
                                                borderBottom:
                                                    '1px solid  #0000004D',
                                                fontFamily: 'meiryo-bold',
                                            }}
                                        >
                                            {item.content}
                                        </li>
                                    ))}
                                </ul>
                                <div
                                    className="action"
                                    style={{ textAlign: 'center' }}
                                >
                                    <Button
                                        type="primary"
                                        style={{
                                            width: '100%',
                                            height: 50,
                                            borderRadius: 10,
                                            marginTop: 30,
                                        }}
                                    >
                                        もっと見る
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

export default History;
