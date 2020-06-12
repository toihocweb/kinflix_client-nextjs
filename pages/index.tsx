import Head from 'next/head';
import Section from '../components/Section';
import variable from '../components/styles/variable';
import { FunctionComponent } from 'react';
import SectionSignup from '../components/SectionSignUp';
import * as React from 'react';
import { ServiceItem } from '../components/utils/Item_interface';
import Header from '../components/Header';

const Home: FunctionComponent = () => {
    return (
        <div>
            <Head>
                <title>Kinflix</title>
            </Head>
            <main className="container">h1</main>
        </div>
    );
};

export default Home;
