import React, { FunctionComponent } from 'react';
import variable from '../styles/variable';

const Footer: FunctionComponent = () => {
    return (
        <footer>
            <style jsx>{`
                footer {
                    margin-top: 55px;
                    padding: 30px;
                    border-top: 5px solid ${variable.primary};
                }
                ul {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    padding: 0;
                    justify-content: center;
                }
                @media (max-width: 800px) {
                    ul {
                        padding-left: 0px;
                    }
                }
                li {
                    margin-right: 30px;
                }
                li:last-child {
                    margin-right: 0;
                }
                small {
                    display: flex;
                    justify-content: center;
                    margin-top: 20px;
                }
                a {
                    color: #587fff;
                }
            `}</style>

            <div className="container">
                <ul>
                    <li>
                        <a
                            href="https://www.nkc-asia.com/service/"
                            target="_blank"
                        >
                            企業情報
                        </a>
                    </li>
                    <li>
                        <a href="https://tech-biz.jp" target="_blank">
                            ITフリーランスのための情報収集メディア「テックビズ」{' '}
                        </a>
                    </li>
                    <li>
                        <a href="https://dev-card.tech-biz.jp " target="_blank">
                            ITフリーランス向けビジネスゴールドカード「テックビズカード」{' '}
                        </a>
                    </li>
                </ul>
                <small>
                    ©テックビズPointClub Powered by NKC ASIA CO., LTD.
                </small>
            </div>
        </footer>
    );
};

export default Footer;
