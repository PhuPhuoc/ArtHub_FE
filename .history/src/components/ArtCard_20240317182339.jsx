import React, { useState } from "react";
import { Card, Avatar, Modal, Button, Row, Col, Input } from "antd";
import { HeartFilled, HeartOutlined, SendOutlined } from "@ant-design/icons";
import Comment from "../../components/Comment";

const ArtCard = ({ title, description, image, price, artworkId }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [heartFilled, setHeartFilled] = useState(false);

  const handleHeartClick = () => {
    setHeartFilled(!heartFilled);
    // Dispatch actions or perform any necessary logic here
  };

  return (
    <>
      <Card
        onClick={() => setModalVisible(true)}
        cover={<img src={image} alt="image" />}
      >
        <Card.Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
          title={<span>{title}</span>}
          description={<span>{description}</span>}
        />
      </Card>
      <Modal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        <Row>
          <Col span={12}>
            <img src={image} alt={title} style={{ width: "100%" }} />
          </Col>
          <Col span={12}>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>${price}</p>
            <Row>
              <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              <p>Jean Paul</p>
              <button onClick={handleHeartClick}>
                {heartFilled ? (
                  <HeartFilled style={{ color: "red" }} />
                ) : (
                  <HeartOutlined style={{ color: "red" }} />
                )}
              </button>
              <Button>Add to cart</Button>
            </Row>

            {/* Comment Section */}
            <div>
              <h3>Comments</h3>
              {/* Comment section JSX */}
              <div>
                <Comment user="User1" text="Lorem ipsum dolor sit amet" />
                {/* Add more comments here */}
              </div>
              <div>
                <Input placeholder="Add a comment" />
                <button>
                  <SendOutlined />
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default ArtWorkCard;
