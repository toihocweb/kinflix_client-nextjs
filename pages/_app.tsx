import { Auth } from 'aws-amplify';
import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import './../constants/amplifyConfigure';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
    const [loading, setLoading] = useState(true);
    useEffect(effectLoadAuth, [router.pathname]);

    if (loading) {
        return <></>;
    }

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );

    function effectLoadAuth() {
        loadAuth();
    }

    async function loadAuth() {
        try {
            const cognitoUserInfo = await Auth.currentSession();
            console.log('cognitoUserInfo', cognitoUserInfo);
            setLoading(false);
        } catch (error) {
            if (
                error?.code === 'UserNotFoundException' ||
                error === 'No current user'
            ) {
                switch (router.pathname) {
                    case '/':
                    case '/login':
                        break;
                    default:
                        router.push('/login');
                        break;
                }
                setLoading(false);
            } else {
                console.error(error);
                setLoading(false);
            }
        }
    }
};

export default MyApp;
