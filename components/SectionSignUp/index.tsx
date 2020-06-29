import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import variable from '../styles/variable';

interface Props {}

const SectionSignup: FunctionComponent = (props: Props) => {
    return (
        <section className="">
            <div className="container">
                <style jsx>{`
                    .container {
                        padding-top: 40px;
                        text-align: center;
                    }
                `}</style>
                <p>テックビズPointClubへの入会がまだの方はこちら</p>
                <Link href="/signup">
                    <a
                        style={{
                            color: '#FCFCFC',
                            padding: '36px 38px 37px',
                            background: `${variable.btnColor}`,
                            borderRadius: 10,
                            fontSize: 20,
                            boxShadow: '5px 5px 10px #0000004D',
                            display: 'inline-block',
                        }}
                    >
                        テックビズPointClubに入会する
                    </a>
                </Link>
            </div>
        </section>
    );
};

export default SectionSignup;
