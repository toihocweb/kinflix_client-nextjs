import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';
import { FunctionComponent } from 'react';
import { serviceData } from '../components/common/parties';
import Header from '../components/Header';
import Section from '../components/Section';
import SectionSignup from '../components/SectionSignUp';
import variable from '../components/styles/variable';

const Nav = () => (
    <ul
        style={{
            display: 'flex',
            alignItems: 'center',
        }}
    >
        <li style={{ marginRight: 20 }}>
            <Link href="/login">
                <a className="btn-signup">ログイン </a>
            </Link>
        </li>
        <li>
            <Link href="/login?authState=signUp">
                <a className="btn-signup">会員登録 </a>
            </Link>
        </li>
    </ul>
);

const Home: FunctionComponent = () => {
    return (
        <div>
            <Head>
                <title>Techbiz Home</title>
            </Head>
            <Header nav={<Nav />} />
            <main>
                <style jsx>{`
                    .header-banner {
                        height: 600px;
                        background: url(/images/bg@2x.png) no-repeat;
                        background-size: contain;
                        background-position-x: right;
                    }
                    @media (max-width: 900px) {
                        .header-banner {
                            background-size: cover;
                        }
                    }
                    .container {
                        height: 100%;
                    }
                    .banner {
                        display: flex;
                        align-items: center;
                        height: 100%;
                    }

                    .banner-content {
                        background: white;
                        width: 600px;
                        height: 450px;
                        padding: 82px 60px;
                    }
                    @media (max-width: 466px) {
                        .banner-content {
                            padding: 10vw;
                        }
                    }

                    @media (max-width: 620px) {
                        .banner-content {
                            height: auto;
                        }
                    }

                    .banner-content h2 {
                        color: white;
                        font-size: 32px;
                        text-align: left;
                        color: #3e3e3e;
                        opacity: 1;
                    }
                    .banner-content h3 {
                        color: white;
                    }
                    .banner img {
                        width: 100%;
                        height: 100%;
                    }

                    p {
                        font-size: 16px;
                        margin-bottom: 50px;
                    }
                    h2 {
                        font-family: 'meiryo-bold';
                    }
                `}</style>
                <div className="header-banner">
                    <div className="container">
                        <div className="banner">
                            <div className="banner-content">
                                <h2 style={{ letterSpacing: 6.4 }}>
                                    働いて、学んで、
                                    <br /> 暮らして貯まる
                                </h2>
                                <p>
                                    テックビズPOINT
                                    CLUBでは幅広いジャンルのサービスと提携しているので、
                                    お得に毎日をお過ごしいただけます。
                                    <br />
                                    また、貯まったポイントは1ポイント＝1円としてご利用いただけます。
                                </p>
                                <Link href="/signup">
                                    <a
                                        style={{
                                            background: `${variable.btnColor}`,
                                            borderRadius: 10,
                                            boxShadow: '5px 5px 10px #0000004D',
                                            padding: '15px 80px 20px 80px',

                                            color: '#FCFCFC',
                                            fontSize: 19,
                                            display: 'inline-block',
                                        }}
                                    >
                                        テックビズPointClubに入会する
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <Section
                    Title="提携しているサービスでポイントが貯まる・使える"
                    Parties={serviceData}
                />

                <SectionSignup />
            </main>
        </div>
    );
};

export default Home;
