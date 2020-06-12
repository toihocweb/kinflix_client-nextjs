import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { Button } from 'antd';

interface Props {}

const SectionSignup: FunctionComponent = (props: Props) => {
    return (
        <section className="">
            <div className="container">
                <style jsx>{`
                    .container {
                        padding: 20px;
                        text-align: center;
                    }
                `}</style>
                <p>テックビズPOINT CLUBへの入会がまだの方はこちら</p>
                <Button
                    style={{ marginBottom: 20, width: 500, height: 70 }}
                    type="primary"
                    size="large"
                >
                    <Link href="/signup">
                        <a>テックビズPOINT CLUBに入会する</a>
                    </Link>
                </Button>
            </div>
        </section>
    );
};

export default SectionSignup;
