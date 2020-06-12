import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from 'antd';
const Header: FunctionComponent = (props) => {
    const router = useRouter();
    return (
        <header>
            <style jsx>
                {`
                    header {
                        padding: 20px 0px;
                        border-bottom: 1px solid #f0f0f0;
                    }
                    .container {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                `}
            </style>

            <div className="container">
                <Link href="/">
                    <a className="logo">Logo</a>
                </Link>
                <nav>
                    {router.pathname !== '/signin' &&
                        router.pathname !== '/signup' && (
                            <ul
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <li style={{ marginRight: 20 }}>
                                    <Link href="/signin">
                                        <a className="btn-signup">Đăng Nhâp </a>
                                    </Link>
                                </li>
                                <li>
                                    <Button type="primary" ghost>
                                        <Link href="/signup">
                                            <a className="btn-signup">
                                                Đăng Kí
                                            </a>
                                        </Link>
                                    </Button>
                                </li>
                            </ul>
                        )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
