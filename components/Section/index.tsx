import { Col, Modal, Row } from 'antd';
import React, { FunctionComponent } from 'react';
import variables from '../styles/variable';
import { ServiceItem } from '../utils/ServiceItem_interface';
import CloseModal from '../utils/CloseModal';

interface PartyProp {
    Title: string;
    Parties: Parties;
}

type Parties = ServiceItem[];

const Section: FunctionComponent<PartyProp> = (props) => {
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
        const currentItem = props.Parties.find(
            (val: ServiceItem) => val.id === id
        );
        renderModal(currentItem, () => {
            showModal();
        });
    };

    const handleClick = () => {};

    return (
        <section>
            <style jsx>{`
                section {
                    margin-bottom: 20px;
                    background: #ebf4ff;
                    padding: 100px 60px;
                }
                .title {
                    color: #3e3e3e;
                    padding: 8px 14px;
                    text-align: center;
                    font-size: 28px;
                    width: 736px;
                    margin: auto;
                    border-bottom: 5px solid ${variables.primary};
                }
                @media (max-width: 850px) {
                    .title {
                        width: auto;
                    }
                }
                .des {
                    margin-bottom: 20px;
                }
                .content {
                    padding-top: 30px;
                }
                img {
                    max-width: 100%;
                }
                .card {
                    text-align: center;
                }

                .t-center {
                    text-align: center;
                    padding: 10px;
                }
                .modal-image {
                    margin-bottom: 31px;
                }
                .item-image {
                    cursor: pointer;
                }
                h2 {
                    font-size: 28px;
                    font-family: 'meiryo-bold';
                }
                h4 {
                    font-size 20px;
                    margin-bottom: 22px;
                }
                
            `}</style>
            <div className="container">
                <h2 className="title">{props.Title}</h2>
                <div className="content">
                    <Row>
                        <Col
                            sm={{ span: 24, offset: 0 }}
                            md={{ span: 20, offset: 2 }}
                            lg={{ span: 16, offset: 4 }}
                        >
                            <Row gutter={[20, 10]}>
                                {props.Parties.map((val: any) => (
                                    <Col key={val.id} sm={12} md={8}>
                                        <div className="card">
                                            <div
                                                onClick={handleClick}
                                                className="card-title"
                                            >
                                                {val.title}
                                            </div>
                                            <p
                                                className="item-image"
                                                onClick={() =>
                                                    handleShowItem(val.id)
                                                }
                                            >
                                                <img src={val.img} alt="" />
                                            </p>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>

                    <Modal
                        visible={visible}
                        onOk={handleOk}
                        confirmLoading={loading}
                        onCancel={handleCancel}
                        footer={null}
                        style={{ top: 15 }}
                        closeIcon={<CloseModal />}
                    >
                        <h2>{selectedItem.title}</h2>
                        <h4>{selectedItem.sub}</h4>
                        <p className="modal-image">
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
                    </Modal>
                </div>
            </div>
        </section>
    );
};

Section.defaultProps = {
    Title: 'Title',
    Parties: [],
};

export default React.memo(Section);
