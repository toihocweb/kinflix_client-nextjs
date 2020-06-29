import React, { FunctionComponent } from 'react';
import variable from '../styles/variable';
import Link from 'next/link';

const index: FunctionComponent<{ top?: boolean }> = ({ top }) => {
    return (
        <ul
            style={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <style jsx>{`
                @media (max-width: 500px) {
                    .btn-back {
                        font-size: 14px;
                    }
                }
            `}</style>
            <li>
                <Link href={top ? '/top' : '/'}>
                    <a
                        style={{
                            padding: 15,
                            color: '#3E3E3E',
                            boxShadow: '5px 5px 10px #0000004D',
                            background: variable.cardBg,
                            fontFamily: 'meiryo-bold',
                            display: 'inline-block',
                            height: 48,
                        }}
                        className="btn-back"
                    >
                        {top ? 'マイページへ戻る' : 'ホームページへ戻る'}
                    </a>
                </Link>
            </li>
        </ul>
    );
};

export default index;
