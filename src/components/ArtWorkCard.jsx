import {
  Card,
  Avatar, Row, Col, Button, Form, Input, Modal, message,
} from "antd";
import React, { useEffect, useState } from "react";
import Meta from "antd/es/card/Meta";
import {HeartFilled, HeartOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import Comment from "./Comment.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getArtworkCommentSelector, getArtworkLikeSelector, getArtworkSelector} from "../redux/selector.js";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import {
  addCommentArtwork,
  addLikeArtwork,
  addToCart,
  getArtwork,
  getCommentArtwork, getLikeArtwork
} from "../redux/slices/artworkSlice.js";
// eslint-disable-next-line react/prop-types
const ArtworkCard = (artwork) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [heartFilled, setHeartFilled] = useState(false);

  const artworkData = useSelector(getArtworkSelector);
  const likes = useSelector(getArtworkLikeSelector);
  const comment = useSelector(getArtworkCommentSelector);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [sessionCookie, setSessionCookie] = useState("");

  useEffect(() => {
    const cookieValue = Cookies.get("sessionCookie");
    if (cookieValue) {
      setSessionCookie(cookieValue);
    }
  }, []);
  const handleHeartClick = () => {
    if (sessionCookie) {
      setHeartFilled(!heartFilled);
      dispatch(addLikeArtwork(modalContent.artworkId));
    } else {
      navigate('/login');
    }
  };
  const handleAddToCart = () => {
    if (sessionCookie) {
      const userId = Cookies.get("sessionCookie");
      const artworkId = modalContent.artworkId;
      const values = { userId, artworkId };
      dispatch(addToCart(values))
          .unwrap()
          .then(() => {
            message.success("Added artwork to the cart");
          })
          .catch((error) => {
            message.error(error);
          });
    } else {
      navigate('/login');
    }

  };

  const handleArtworkClick = (
      title,
      description,
      image,
      price,
      artworkId,
      user
  ) => {
    setModalContent({ title, description, image, price, artworkId, user });
    setModalVisible(true);
  };
  const handleComment = (values) => {
    if (sessionCookie) {
      const artworkId = modalContent.artworkId;
      const userId = Cookies.get("sessionCookie");
      const text = values.text;
      const data = { artworkId, userId, text };
      dispatch(addCommentArtwork(data))
          .unwrap()
          .then(() => {
            form.resetFields();
            dispatch(getCommentArtwork(modalContent.artworkId));
          });
    } else {
      navigate('/login');
    }

  };

  useEffect(() => {
    dispatch(getArtwork());
  }, []);
  useEffect(() => {
    dispatch(getLikeArtwork(modalContent.artworkId));
    dispatch(getCommentArtwork(modalContent.artworkId));
  }, [modalContent]);

  return (
      <div style={{ padding: 10 }}>
    <Card
      cover={<img src={artwork.image} alt={artwork.title}/>}
      onClick={() => handleArtworkClick(artwork.title, artwork.description, artwork.image)}
      style={{ width: 350 }}
    >
      <Meta
        avatar={
          <Avatar
            src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
            style={{ cursor: "pointer" }}
          />
        }
        title={<span style={{ color: "black", fontSize: "15px", borderBottom: "1px solid black" }}>{artwork.title}</span>}
        description={<span style={{ color: "black", fontSize: "12px" }}>{artwork.description}</span>}
      />
      <button style={{ position: 'absolute', right: "10px", bottom: "10px", alignItems: 'center', border: 'none', outline: 'none', transition: 'none', boxShadow: 'none' }} onClick={handleHeartClick}>
        {heartFilled ? <HeartFilled style={{ color: 'red', fontSize: '24px' }} /> : <HeartOutlined style={{ color: 'red', fontSize: '24px' }} />}
      </button>
    </Card>

        <Modal
            title={null}
            visible={modalVisible}
            onCancel={() => setModalVisible(false)}
            footer={null}
            style={{ top: 20, minWidth: "80%", maxWidth: "80%", bottom: 20 }}
        >
          <Row>
            <Col span={12}>
              <img
                  src={modalContent.image}
                  alt={modalContent.title}
                  style={{ width: "100%", height: "100%", paddingRight: "20px" }}
              />
            </Col>
            <Col span={12} style={{ paddingLeft: "20px" }}>
              <h2
                  style={{
                    fontSize: "200%",
                    fontFamily: "serif",
                    fontWeight: "bold",
                    paddingBottom: "10px",
                  }}
              >
                {modalContent.title}
              </h2>
              <p style={{ fontSize: "130%", paddingBottom: "10px" }}>
                {modalContent.description}
              </p>
              <p
                  style={{
                    fontSize: "130%",
                    paddingBottom: "250px",
                    fontStyle: "italic",
                  }}
              >
                ${modalContent.price}
              </p>
              <Row style={{ paddingLeft: "10px" }}>
                <Avatar
                    className="avatar"
                    src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                    style={{ cursor: "pointer", width: "10%", height: "10%" }}
                />
                <p
                    style={{
                      paddingLeft: "10px",
                      marginTop: "10px",
                      fontSize: "120%",
                    }}
                >
                  {modalContent.user ? modalContent.user.name : "User"}
                </p>
                <button
                    style={{
                      position: "absolute",
                      right: "180px",
                      bottom: "45px",
                      alignItems: "center",
                      border: "none",
                      outline: "none",
                      transition: "none",
                      boxShadow: "none",
                    }}
                    onClick={handleHeartClick}
                >
                  {heartFilled ? (
                      <HeartFilled style={{ color: "red", fontSize: "24px" }} />
                  ) : (
                      <HeartOutlined style={{ color: "red", fontSize: "24px" }} />
                  )}
                  {likes ? likes.likes : "0"}
                </button>
                <Button
                    onClick={handleAddToCart}
                    id="hearthButton"
                    style={{
                      position: "absolute",
                      right: 10,
                      alignItems: "center",
                    }}
                >
                  Add to cart
                  <ShoppingCartOutlined style={{ alignItems: "center" }} />{" "}
                </Button>
              </Row>
            </Col>
          </Row>

          {/* Comment Section */}
          <Row style={{ paddingTop: "20px" }}>
            <Col span={24}>
              <h3
                  style={{
                    fontSize: "150%",
                    fontWeight: "bold",
                    paddingBottom: "10px",
                  }}
              >
                Comments
              </h3>
              {/* Comment section JSX */}
              <div
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    padding: "10px",
                    height: "250px",
                    overflowY: "auto",
                  }}
              >
                {comment?.comments?.map((item, index) => (
                    <Comment
                        key={index}
                        user={item?.user ? `${item?.user?.name}` : "User"}
                        text={item?.text}
                    />
                ))}
              </div>
              <div style={{ marginTop: "20px" }}>
                <Form form={form} onFinish={handleComment}>
                  <Form.Item name="text">
                    <Input placeholder="Add a comment" />
                  </Form.Item>
                </Form>
              </div>
            </Col>
          </Row>
        </Modal>

      </div>
  );
};

export default ArtworkCard;