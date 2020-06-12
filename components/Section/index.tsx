import React, { FunctionComponent } from 'react';
import { Row, Col, Modal } from 'antd';
import variables from '../styles/variable';
import { ServiceItem } from '../utils/Item_interface';

interface PartyProp {
    Title: string;
    Parties: Parties;
}

type Parties = ServiceItem[];

const Section: FunctionComponent<PartyProp> = ({ Title, Parties }) => {
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
        const currentItem = Parties.find((val: ServiceItem) => val.id === id);
        renderModal(currentItem, () => {
            showModal();
        });
    };

    return (
        <section>
            <style jsx>{`
                section {
                    border: 2px solid ${variables.primary};
                    margin-bottom: 20px;
                }
                .title {
                    color: white;
                    padding: 8px 14px;
                    background: ${variables.primary};
                    text-align: center;
                }
                .des {
                    margin-bottom: 20px;
                }
                .content {
                    padding: 20px;
                }
                img {
                    max-width: 100%;
                }
                .card {
                    box-shadow: 1px 1px 2px 0px #33333363;
                    transition: all 0.2s ease-in;
                }
                .card:hover {
                    transform: translateY(-3px);
                    box-shadow: 1px 3px 2px 0px #33333363;
                }
                .card a {
                    display: block;
                    padding: 8px;
                }
                .card a:hover {
                    text-decoration: underline;
                }
                .card-title {
                    text-align: center;
                    padding: 10px;
                    background: #999;
                    color: white;
                }
                .t-center {
                    text-align: center;
                    padding: 10px;
                }
                .modal-image {
                    margin: 20px 0px;
                }
                .item-image {
                    cursor: pointer;
                }
            `}</style>
            <h2 className="title">{Title}</h2>
            <div className="content">
                <Row gutter={[20, 10]}>
                    {Parties.map((val: any) => (
                        <Col key={val.id} sm={8}>
                            <div className="card">
                                <div className="card-title">{val.title}</div>
                                <p
                                    className="item-image"
                                    onClick={() => handleShowItem(val.id)}
                                >
                                    <img src={val.img} alt="" />
                                </p>
                            </div>
                        </Col>
                    ))}
                </Row>
                <Modal
                    title={selectedItem.title}
                    visible={visible}
                    onOk={handleOk}
                    confirmLoading={loading}
                    onCancel={handleCancel}
                    footer={null}
                    style={{ top: 15 }}
                >
                    <p>{selectedItem.link_text}</p>
                    <p className="modal-image">
                        <img src={selectedItem.img} alt="" />
                    </p>
                    <p className="modal-description">
                        催式ホタ先1政経まち例緒銀料れ育線もよふ苦区ア一丹よび位用じレざさ果丼ク。1印サユイ並陣フせでこ治女ち選力ミ式95劇ネ応段すで彰株洋くみひ調人ったゅろ新使ヒ無事モヤフ電田ヤスロ身俊うあ償存油ニチセム分摘月ぞわ案図くゃえ以火違相ゃけ。
                        <br />
                        発ヘイツ上問ちづ間会節ぜゆえ人買ノマエ約族作でルけぐ度食ぴずい表不郎フぐ演購ヱヤモ連本ハチ局毎ょぎねぶ医2傷脱雪が。
                    </p>
                </Modal>
            </div>
        </section>
    );
};

Section.defaultProps = {
    Title: 'Title',
    Parties: [],
};

export default React.memo(Section);
