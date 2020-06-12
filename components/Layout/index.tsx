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
                <meta
                    name="description"
                    content="Buy aaccount cheaper, tai khoan gia re"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <style jsx global>
                {`
                    .container {
                        max-width: 1200px;
                        margin: 0 auto;
                    }
                    ul,
                    ol {
                        list-style: none;
                        margin: 0;
                    }
                    img {
                        max-width: 100%;
                    }
                `}
            </style>
            <ProcessBar />
            <Header />
            <div className="layout">{props.children}</div>
            <Footer />
        </>
    );
};

export default Layout;
