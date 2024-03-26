import {
  Space,
  Typography,
  Input,
  Button,
  Segmented,
  Row,
  Col,
  Card,
  Avatar,
  Form,
  message,
} from "antd";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import "./OurHub.css";
import Meta from "antd/es/card/Meta";
import { Modal } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSpring, animated } from "react-spring";
import { HeartFilled, HeartOutlined, SendOutlined } from "@ant-design/icons";
import Comment from "../../components/Comment";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addCommentArtwork,
  addToCart,
  getArtwork,
  getCommentArtwork,
} from "../../redux/slices/artworkSlice";
import {
  getArtworkCommentSelector,
  getArtworkSelector,
} from "../../redux/selector";
import axios from "axios";
import {
  addLikeArtwork,
  getLikeArtwork,
} from "../../redux/slices/artworkSlice";
import { getArtworkLikeSelector } from "../../redux/selector";
import ourHubBG from "../../assets/images/bg2.jpg";
import Cookies from "js-cookie";

const OurHub = () => {
  const props = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: 100 },
  });
  const justifyOptions = [
    "Discover",
    "Animation",
    "Culture",
    "Technology",
    "Food",
    "All",
  ];

  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalContent, setModalContent] = React.useState({});
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
    setHeartFilled(!heartFilled);
    const userId = Cookies.get("sessionCookie");
    const artworkId = modalContent.artworkId;
    const values = { userId, artworkId };
    dispatch(addLikeArtwork(values))
      .unwrap()
      .then(() => {
        dispatch(getLikeArtwork(modalContent.artworkId));
      });
  };

  const handleOpenProfile = () => {
    if (modalContent.user && modalContent.user._id) {
      const userId = modalContent.user._id;
      window.location.href = `/userprofile/${userId}`; // Navigate to user profile route
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
      navigate("/login");
    }
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
      navigate("/login");
    }
  };
  const [justify, setJustify] = React.useState(justifyOptions[0]);

  useEffect(() => {
    dispatch(getArtwork());
  }, []);
  useEffect(() => {
    dispatch(getLikeArtwork(modalContent.artworkId));
    dispatch(getCommentArtwork(modalContent.artworkId));
  }, [modalContent]);

  //console.log("modal", modalContent);

  const renderImages = () => {
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
    switch (justify) {
      case "Discover":
        return (
          <div className="imagesContain">
            <div className="title">Discover</div>
            <div style={{ marginTop: "100px" }}>
              <Row gutter={[16, 16]}>
                {artworkData?.map((item, index) => {
                  if (item.typeDesign === "discover") {
                    return (
                      <Col span={6} key={index}>
                        <Card
                          onClick={() =>
                            handleArtworkClick(
                              item.title,
                              item.description,
                              item.image,
                              item.price,
                              item._id,
                              item.user[0]
                            )
                          }
                          cover={
                            <img
                              src={item.image}
                              alt="image"
                              style={{
                                width: "400px",
                                height: "400px",
                                objectFit: "cover",
                                maxWidth: "100%",
                                maxHeight: "100%",
                              }}
                            />
                          }
                        >
                          <Meta
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              height: "100px",
                            }}
                            avatar={
                              <Avatar
                                className="avatar"
                                src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                                style={{ cursor: "pointer" }}
                              />
                            }
                            title={
                              <span
                                style={{
                                  color: "black",
                                  fontSize: "15px",
                                  borderBottom: "1px solid black",
                                }}
                              >
                                {item.title}
                              </span>
                            }
                            description={
                              <span
                                style={{ color: "black", fontSize: "12px" }}
                              >
                                {item.description}
                              </span>
                            }
                          />
                        </Card>
                      </Col>
                    );
                  } else {
                    return null;
                  }
                })}
              </Row>
            </div>
          </div>
        );

      case "Animation":
        return (
          <div className="imagesContain">
            <div className="title">Animation</div>
            <div style={{ marginTop: "100px" }}>
              <Row gutter={[16, 16]}>
                {artworkData?.map((item, index) => {
                  if (item.typeDesign === "animation") {
                    return (
                      <Col span={6} key={index}>
                        <Card
                          onClick={() =>
                            handleArtworkClick(
                              item.title,
                              item.description,
                              item.image,
                              item.price,
                              item._id,
                              item.user[0]
                            )
                          }
                          cover={
                            <img
                              src={item.image}
                              alt="image"
                              style={{
                                width: "400px",
                                height: "400px",
                                objectFit: "cover",
                              }}
                            />
                          }
                        >
                          <Meta
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              height: "100px",
                            }}
                            avatar={
                              <Avatar
                                className="avatar"
                                src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                                style={{ cursor: "pointer" }}
                              />
                            }
                            title={
                              <span
                                style={{
                                  color: "black",
                                  fontSize: "15px",
                                  borderBottom: "1px solid black",
                                }}
                              >
                                {item.title}
                              </span>
                            }
                            description={
                              <span
                                style={{ color: "black", fontSize: "12px" }}
                              >
                                {item.description}
                              </span>
                            }
                          />
                        </Card>
                      </Col>
                    );
                  } else {
                    return null;
                  }
                })}
              </Row>
            </div>
          </div>
        );

      case "Culture":
        return (
          <div className="imagesContain">
            <div className="title">Culture</div>
            <div style={{ marginTop: "100px" }}>
              <Row gutter={[16, 16]}>
                {artworkData?.map((item, index) => {
                  if (item.typeDesign === "culture") {
                    return (
                      <Col span={6} key={index}>
                        <Card
                          onClick={() =>
                            handleArtworkClick(
                              item.title,
                              item.description,
                              item.image,
                              item.price,
                              item._id,
                              item.user[0]
                            )
                          }
                          cover={
                            <img
                              src={item.image}
                              alt="image"
                              style={{
                                width: "400px",
                                height: "400px",
                                objectFit: "cover",
                              }}
                            />
                          }
                        >
                          <Meta
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              height: "100px",
                            }}
                            avatar={
                              <Avatar
                                className="avatar"
                                src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                                style={{ cursor: "pointer" }}
                              />
                            }
                            title={
                              <span
                                style={{
                                  color: "black",
                                  fontSize: "15px",
                                  borderBottom: "1px solid black",
                                }}
                              >
                                {item.title}
                              </span>
                            }
                            description={
                              <span
                                style={{ color: "black", fontSize: "12px" }}
                              >
                                {item.description}
                              </span>
                            }
                          />
                        </Card>
                      </Col>
                    );
                  } else {
                    return null;
                  }
                })}
              </Row>
            </div>
          </div>
        );
      case "Technology":
        return (
          <div className="imagesContain">
            <div className="title">Technology</div>
            <div style={{ marginTop: "100px" }}>
              <Row gutter={[16, 16]}>
                {artworkData?.map((item, index) => {
                  if (item.typeDesign === "technology") {
                    return (
                      <Col span={6} key={index}>
                        <Card
                          onClick={() =>
                            handleArtworkClick(
                              item.title,
                              item.description,
                              item.image,
                              item.price,
                              item._id,
                              item.user[0]
                            )
                          }
                          cover={
                            <img
                              src={item.image}
                              alt="image"
                              style={{
                                width: "400px",
                                height: "400px",
                                objectFit: "cover",
                              }}
                            />
                          }
                        >
                          <Meta
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              height: "100px",
                            }}
                            avatar={
                              <Avatar
                                className="avatar"
                                src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                                style={{ cursor: "pointer" }}
                              />
                            }
                            title={
                              <span
                                style={{
                                  color: "black",
                                  fontSize: "15px",
                                  borderBottom: "1px solid black",
                                }}
                              >
                                {item.title}
                              </span>
                            }
                            description={
                              <span
                                style={{ color: "black", fontSize: "12px" }}
                              >
                                {item.description}
                              </span>
                            }
                          />
                        </Card>
                      </Col>
                    );
                  } else {
                    return null;
                  }
                })}
              </Row>
            </div>
          </div>
        );

      case "Food":
        return (
          <div className="imagesContain">
            <div className="title">Food</div>
            <div style={{ marginTop: "100px" }}>
              <Row gutter={[16, 16]}>
                {artworkData?.map((item, index) => {
                  if (item.typeDesign === "food") {
                    return (
                      <Col span={6} key={index}>
                        <Card
                          onClick={() =>
                            handleArtworkClick(
                              item.title,
                              item.description,
                              item.image,
                              item.price,
                              item._id,
                              item.user[0]
                            )
                          }
                          cover={
                            <img
                              src={item.image}
                              alt="image"
                              style={{
                                width: "400px",
                                height: "400px",
                                objectFit: "cover",
                              }}
                            />
                          }
                        >
                          <Meta
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              height: "100px",
                            }}
                            avatar={
                              <Avatar
                                className="avatar"
                                src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                                style={{ cursor: "pointer" }}
                              />
                            }
                            title={
                              <span
                                style={{
                                  color: "black",
                                  fontSize: "15px",
                                  borderBottom: "1px solid black",
                                }}
                              >
                                {item.title}
                              </span>
                            }
                            description={
                              <span
                                style={{ color: "black", fontSize: "12px" }}
                              >
                                {item.description}
                              </span>
                            }
                          />
                        </Card>
                      </Col>
                    );
                  } else {
                    return null;
                  }
                })}
              </Row>
            </div>
          </div>
        );

      case "All":
        return (
          <div className="imagesContain">
            <div className="title">All Images</div>
            <div style={{ marginTop: "100px" }}>
              <Row gutter={[16, 16]}>
                {artworkData?.map((item, index) => (
                  <Col span={6} key={index}>
                    <Card
                      onClick={() =>
                        handleArtworkClick(
                          item.title,
                          item.description,
                          item.image,
                          item.price,
                          item._id,
                          item.user[0]
                        )
                      }
                      cover={
                        <img
                          src={item.image}
                          alt="image"
                          style={{
                            width: "400px",
                            height: "400px",
                            objectFit: "cover",
                          }}
                        />
                      }
                    >
                      <Meta
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          height: "100px",
                        }}
                        avatar={
                          <Avatar
                            className="avatar"
                            src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                            style={{ cursor: "pointer" }}
                          />
                        }
                        title={
                          <span
                            style={{
                              color: "black",
                              fontSize: "15px",
                              borderBottom: "1px solid black",
                            }}
                          >
                            {item.title}
                          </span>
                        }
                        description={
                          <span style={{ color: "black", fontSize: "12px" }}>
                            {item.description}
                          </span>
                        }
                      />
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        );
      default:
        return <div>No images found</div>;
    }
  };
  return (
    <animated.div style={props}>
      <div className="OurHubPage" style={{ minHeight: "100vh", width: "100%" }}>
        <div className="firstSectionOurHub">
          <section>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </section>
          <Typography.Title
            style={{
              color: "white",
              fontSize: "70px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "250px",
              textAlign: "center",
            }}
          >
            Discover the world’s top <br /> designers & creatives
          </Typography.Title>
          <p
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              color: "#dedde2",
              fontSize: "28px",
              textAlign: "center",
              marginTop: "100px",
            }}
          >
            Dribbble is the leading destination to find & showcase creative work
            and <br /> home to the world's best design professionals.
          </p>
          <div
            className="searchContainer"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "50px",
              height: "50px",
              width: "100%",
            }}
          >
            <CiSearch className="searchIcon" />

            <input
              className="inputSearch"
              type="text"
              placeholder="Search anything you want !"
              style={{
                padding: "10px",
                fontSize: "16px",
                width: "500px",
                borderRadius: "10px",
                border: "1px solid white",
                color: "#dbd8e7",
              }}
            />
            <button
              className="searchBtn"
              style={{
                marginLeft: "10px",
                padding: "10px",
                fontSize: "16px",
                width: "100px",
                color: "White",
                border: "1px solid white",
                borderRadius: "10px",
              }}
            >
              Search
            </button>
          </div>
        </div>
        <div
          className="secondSection"
          style={{ marginTop: "150px", borderTop: "5px dashed black" }}
        >
          <div
            className="buttonsContainer"
            style={{
              display: "flex",
              justifyContent: "center",
              height: "60px",
              alignItems: "center",
              transform: "translateY(200px)",
            }}
          >
            <Segmented
              size="large"
              options={justifyOptions}
              onChange={setJustify}
            />
          </div>
          {renderImages()}
        </div>
      </div>
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
              style={{
                width: "90%",
                maxHeight: "500px",
                paddingRight: "20px",
              }}
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
                onClick={handleOpenProfile}
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
                  bottom: "80px",
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
                  bottom: 80,
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
    </animated.div>
  );
};

export default OurHub;
