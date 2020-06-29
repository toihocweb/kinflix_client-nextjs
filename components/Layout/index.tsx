import React, { FunctionComponent } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import ProcessBar from '../utils/ProgressBar';
import Head from 'next/head';

const Layout: FunctionComponent = (props) => {
    return (
        <>
            <Head>
                <meta name="robots" content="noindex, nofollow" />
                <meta name="description" content="A Recuiter Web.." />
                <link rel="icon" href="/favicon-192x192.png" />
            </Head>
            <style jsx global>
                {`
                    @font-face {
                        font-family: meiryo-bold;
                        src: url('/fonts/MEIRYOB.TTC');
                    }
                    @font-face {
                        font-family: meiryo;
                        src: url('/fonts/MEIRYO.TTC');
                    }
                    .container {
                        max-width: 1100px;
                        margin: 0 auto;
                    }
                    @media (max-width: 1100px) {
                        .container {
                            padding: 0px 16px;
                        }
                    }
                    body,
                    html {
                        font-size: 16px;
                        color: #3e3e3e;
                        font-family: meiryo;
                        scroll-behavior: smooth;
                    }

                    ul,
                    ol {
                        list-style: none;
                        margin: 0;
                    }
                    img {
                        max-width: 100%;
                    }
                    button {
                        outline: none;
                        background: none;
                        border: none;
                    }
                    .checkbox .ant-form-item-explain {
                        display: none;
                    }
                    .ant-modal-content {
                        border-radius: 10px;
                    }
                    .ant-modal-close-x {
                        width: 50px;
                        height: 50px;
                        line-height: 50px;
                    }
                `}
            </style>
            <ProcessBar />
            {props.children}
            <Footer />
        </>
    );
};

export default Layout;
