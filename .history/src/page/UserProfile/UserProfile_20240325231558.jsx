import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import prf from "../../assets/images/profile.jpg";
import Modal from "react-modal";
import Avatar from "react-avatar-edit";
import { Space, Typography, Input, Button, Segmented, Flex, Row, Col, Card } from "antd";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const { id } = useParams(); // Extract id from URL
  const [im, setim] = useState(null);
  const [pim, setpim] = useState(null);
  const [userArtworks, setUserArtworks] = useState([]);
  const [user, setUser] = useState(null);
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/${id}`);
        setUser(response.data.user);
        setLoading(false);
      } catch (error) {
        setError('Error fetching user profile');
        setLoading(false);
      }
    };

    const fetchFollowers = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/${id}/followers`);
        setFollowers(response.data.followers);
        console.log(response.data.followers);
      } catch (error) {
        setError('Error fetching user followers');
      }
    };

    const fetchUserPosts = (userId) => {
      axios
        .get(`http://localhost:5000/api/users/${userId}/artworks`)
        .then((response) => {
          setUserArtworks(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user posts:", error);
        });
    };

    fetchUserPosts(id);
    fetchUser();
    fetchFollowers();
  }, [id]);

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

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      {/* Profile header */}
      <div className="profile-img" style={{ width: "100%", height: "400px" }}>
        <div className="fileupload">
          <img src={im ? im : prf} />
        </div>
        <Typography.Title
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          {user && user.name}
        </Typography.Title>
        <Typography.Text
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "15px",
          }}
        >
          {followers.length} followers
        </Typography.Text>
      </div>

      {/* Artworks section */}
      <div className="secondSection">
        {/* Render user artworks */}
        <div className="artworks">
          <div className="artworksContainer">
            {userArtworks.map((artwork, index) => (
              <div className="artworkCard" key={index} onClick={() => handleArtworkClick(artwork.title, artwork.description, artwork.image, artwork.price, artwork.artworkId, artwork.user)}>
                {artwork.image && (
                  <img src={artwork.image} alt="" className="artworkImage" />
                )}
                <p style={{ fontWeight: 800, padding: 5, marginTop: 5 }}>
                  {artwork.title}
                </p>
                <p style={{ padding: 5 }}>{artwork.description}</p>
                {/* Add edit and delete buttons here if needed */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        title={null}
        visible={modalVisible}
        onCancel={closeModal}
        footer={null}
        style={{ top: 20, minWidth: "80%", maxWidth: "80%", bottom: 20 }}
      >
        {modalContent && (
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
        )}

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

export default UserProfile;
