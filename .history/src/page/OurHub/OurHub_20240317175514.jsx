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
import { useDispatch, useSelector } from "react-redux";
import { getArtwork } from "../../redux/slices/artworkSlice";
import { getArtworkSelector } from "../../redux/selector";
import axios from "axios";
import {
  addLikeArtwork,
  getLikeArtwork,
} from "../../redux/slices/artworkSlice";
import { getArtworkLikeSelector } from "../../redux/selector";
import ourHubBG from "../../assets/images/bg2.jpg";
import ArtWorkCard from "../../components/ArtWorkCard";
const OurHub = () => {

  <ArtWorkCard  

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
  const dispatch = useDispatch();
  const handleHeartClick = () => {
    setHeartFilled(!heartFilled);
    dispatch(addLikeArtwork(modalContent.artworkId));
    dispatch(getLikeArtwork(modalContent.artworkId));
  };
  const [justify, setJustify] = React.useState(justifyOptions[0]);

  useEffect(() => {
    dispatch(getArtwork());
  }, []);
  useEffect(() => {
    dispatch(getLikeArtwork(modalContent.artworkId));
  }, [modalContent]);

  console.log(artworkData);

  const renderImages = () => {

    //Create a ArtworkCard component
    


    const handleArtworkClick = (
      title,
      description,
      image,
      price,
      artworkId
    ) => {
      setModalContent({ title, description, image, price, artworkId });
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
                              item._id
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
                              item._id
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
                              item._id
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
                              item._id
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
                              item._id
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
                          item._id
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
                Jean Paul
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
                id="hearthButton"
                style={{
                  position: "absolute",
                  right: 10,
                  alignItems: "center",
                }}
              >
                Add to cart{" "}
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
              <Comment
                user="User1"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
              <Comment
                user="User2"
                text="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
              <Comment
                user="User3"
                text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
              <Comment
                user="User4"
                text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              />
              <Comment
                user="User5"
                text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              />
              <Comment
                user="User6"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
              <Comment
                user="User7"
                text="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
              <Comment
                user="User8"
                text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
              <Comment
                user="User9"
                text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              />
              <Comment
                user="User10"
                text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <Input placeholder="Add a comment" />
              <button
                style={{ position: "absolute", right: 20, paddingTop: "6px" }}
              >
                <SendOutlined />
              </button>
            </div>
          </Col>
        </Row>
      </Modal>
    </animated.div>
  );
};

export default OurHub;
