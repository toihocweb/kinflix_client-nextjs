import { Button, Col, Modal, Row } from 'antd';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { FunctionComponent } from 'react';
import { serviceData } from '../components/common/parties';
import Header from '../components/Header';
import variable from '../components/styles/variable';
import { ServiceItem } from '../components/utils/ServiceItem_interface';
import authApi from './../api/authApi';
import CloseModal from '../components/utils/CloseModal';

const Nav = () => {
    const router = useRouter();

    return (
        <ul
            style={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <li style={{ marginRight: 20 }}>
                <Link href="/">
                    <a>会員情報の確認・変更 </a>
                </Link>
            </li>
            <li>
                <Button type="link" onClick={onButtonLogoutClicked}>
                    ログアウト
                </Button>
            </li>
        </ul>
    );

    async function onButtonLogoutClicked() {
        try {
            await authApi.signOut();
            router.push('/login');
        } catch (error) {
            console.error(error.toString());
        }
    }
};

const Top: FunctionComponent = () => {
    const [categories, setCategories] = React.useState<string[]>([]);
    const [visible, setVisible] = React.useState<boolean>(false);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [selectedItem, setSelectedItem] = React.useState<ServiceItem>(
        {} as ServiceItem
    );

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setVisible(false);
        }, 2000);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const renderModal = (currentItem, cb) => {
        setSelectedItem(currentItem);
        cb();
    };

    const handleShowItem = (id: number) => {
        const currentItem = serviceData.find(
            (val: ServiceItem) => val.id === id
        );
        renderModal(currentItem, () => {
            showModal();
        });
    };
    React.useEffect(() => {
        const mergedCategories = serviceData.reduce(
            (acc, val) => acc.concat(val.categories),
            []
        );
        const categoryUnique = new Set(mergedCategories);
        setCategories([...categoryUnique]);
        return () => {};
    }, []);
    return (
        <div>
            <Head>
                <title>Techbiz Top</title>
            </Head>
            <Header nav={<Nav />} />
            <main>
                <style jsx>{`
                    main {
                        margin-top: 50px;
                    }

                    .card {
                        background: ${variable.cardBg};
                        padding: 30px;
                        border-top: 3px solid ${variable.primary};
                        display: flex;
                        flex-direction: column;
                    }
                    .left-card h4 {
                        border-bottom: 2px solid ${variable.primary};
                        padding-bottom: 8px;
                        font-size: 16px;
                    }
                    .bg-white {
                        background: white;
                        text-align: center;
                        padding: 15px 0px;
                        margin: 20px 0px;
                    }
                    .bg-white h2 {
                        font-size: 16px;
                    }
                    .bg-white span {
                        font-size: 36px;
                    }
                    .right-card h2 {
                        font-size: 32px;
                        text-align: center;
                    }
                    .right-card .links {
                        display: flex;
                        justify-content: center;
                        flex-wrap: wrap;
                    }
                    @media (max-width: 700px) {
                        .links {
                            flex-direction: column;
                        }
                    }
                    .links a {
                        margin-left: 30px;
                        text-decoration: underline;
                    }

                    .banners img {
                        width: 100%;
                    }
                `}</style>
                <div className="container">
                    <Row gutter={[{ sm: 30 }, 20]}>
                        <Col xs={24} md={7}>
                            <div className="card left-card">
                                <h4>こんにちは、テストさん</h4>
                                <div className="bg-white">
                                    <h3>利用可能ポイント</h3>
                                    <span>9999</span>
                                </div>
                                <Button
                                    size="large"
                                    style={{ marginBottom: 20 }}
                                    type="primary"
                                >
                                    <Link href="/change-point">
                                        <a href="">ポイント交換</a>
                                    </Link>
                                </Button>
                                <Button size="large" type="primary">
                                    <Link href="/history-point">
                                        <a href="">ポイント履歴</a>
                                    </Link>
                                </Button>
                            </div>
                        </Col>
                        <Col
                            md={{
                                span: 17,
                            }}
                        >
                            <div className="card right-card">
                                <h2
                                    style={{
                                        fontFamily: 'meiryo-bold',
                                        fontSize: 32,
                                    }}
                                >
                                    テックビズポイントが貯まる・使えるサービス一覧
                                </h2>
                                <div className="links">
                                    <a href="#category0">バックオフィス</a>
                                    <a href="#category1">ワークスペース</a>
                                    <a href="#category2">スキルアップ</a>
                                    <a href="#category3">ライフスタイル</a>
                                </div>
                                <div style={{ marginTop: 30 }} className="list">
                                    <div className="category">
                                        {categories.map((item, idx) => (
                                            <div
                                                style={{ marginBottom: 20 }}
                                                key={idx}
                                            >
                                                <h3
                                                    style={{
                                                        fontSize: 24,
                                                        fontFamily:
                                                            'meiryo-bold',
                                                    }}
                                                    className="category"
                                                    id={`category${idx}`}
                                                >
                                                    {item}
                                                </h3>
                                                <Row>
                                                    {serviceData
                                                        .filter((val) =>
                                                            val.categories.includes(
                                                                item
                                                            )
                                                        )
                                                        .map((service) => (
                                                            <Col
                                                                key={service.id}
                                                                md={8}
                                                                sm={12}
                                                            >
                                                                <div className="item">
                                                                    <p
                                                                        onClick={() =>
                                                                            handleShowItem(
                                                                                service.id
                                                                            )
                                                                        }
                                                                    >
                                                                        <img
                                                                            style={{
                                                                                cursor:
                                                                                    'pointer',
                                                                            }}
                                                                            src={
                                                                                service.img
                                                                            }
                                                                            alt=""
                                                                        />
                                                                    </p>
                                                                </div>
                                                            </Col>
                                                        ))}
                                                </Row>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div style={{ marginTop: 40 }} className="banners">
                        <Row gutter={[40, { xs: 20, sm: 20 }]}>
                            <Col md={8}>
                                <div className="banner-image">
                                    <img src="/images/banner1@2x.png" alt="" />
                                </div>
                            </Col>
                            <Col md={8}>
                                <div className="banner-image">
                                    <img src="/images/banner2@2x.png" alt="" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Modal
                        visible={visible}
                        onOk={handleOk}
                        confirmLoading={loading}
                        onCancel={handleCancel}
                        footer={null}
                        style={{ top: 15 }}
                        closeIcon={<CloseModal />}
                    >
                        <h2 style={{ fontSize: 28, fontFamily: 'meiryo-bold' }}>
                            {selectedItem.title}
                        </h2>
                        <h4
                            style={{
                                fontSize: 20,
                                marginBottom: 30,
                                fontFamily: 'meiryo-bold',
                            }}
                        >
                            {selectedItem.sub}
                        </h4>
                        <p className="modal-image" style={{ marginBottom: 30 }}>
                            <img
                                className="selected-img"
                                src={selectedItem.modalImg}
                                alt=""
                            />
                        </p>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: selectedItem.description,
                            }}
                            className="modal-description"
                        ></p>
                        <div
                            className="modal-action"
                            style={{ textAlign: 'center', margin: '30px 0px' }}
                        >
                            <Link
                                href={`/confirm-service?service=${selectedItem.title}`}
                            >
                                <a
                                    style={{
                                        background: `${variable.btnColor}`,
                                        color: 'white',
                                        borderRadius: 5,
                                        padding: '15px 90px',
                                    }}
                                >
                                    サービスに申し込む
                                </a>
                            </Link>
                        </div>
                    </Modal>
                </div>
            </main>
        </div>
    );
};

export default Top;
