import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import variable from '../styles/variable';
const Header: FunctionComponent<{ nav?: JSX.Element }> = ({ nav }) => {
    return (
        <header>
            <style jsx>
                {`
                    header {
                        border-bottom: 5px solid ${variable.primary};
                    }
                    .container {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        height: 100%;
                    }
                    a {
                        width: 145px;
                        padding: 20px 0px 24px;
                    }
                `}
            </style>

            <div className="container">
                <Link href="/">
                    <a className="logo">
                        <img src="/images/techbiz_pointclub@2x.png" />
                    </a>
                </Link>
                {nav && <nav>{nav}</nav>}
            </div>
        </header>
    );
};

export default Header;
