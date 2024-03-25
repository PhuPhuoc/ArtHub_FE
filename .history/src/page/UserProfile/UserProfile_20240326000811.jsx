import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import prf from "../../assets/images/profile.jpg";
import Modal from "react-modal";
import Meta from "antd/es/card/Meta";
import Avatar from "react-avatar-edit";
import {
  Space,
  Typography,
  Input,
  Button,
  Segmented,
  Flex,
  Row,
  Col,
  Card,
} from "antd";
import { useSelector } from "react-redux";

const UserProfile = () => {
    
  const { id } = useParams(); // Extract id from URL
  const [im, setim] = useState(null);
  const [pim, setpim] = useState(null);
  const [userArtworks, setUserArtworks] = useState([]);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalContent, setModalContent] = React.useState({});

  const [user, setUser] = useState(null);
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  const renderImages = () => {
    console.log("User Artworks:", userArtworks); // Log user artworks to check data
    
    return (
      <div className="imagesContain">
        <div style={{ marginTop: "100px" }}>
          <Row gutter={[16, 16]}>
            {userArtworks?.map((item, index) => {
              console.log("Artwork item:", item);
              // Log each artwork item to check its properties
              
              return (
                <Col span={6} key={index}>
                  {item.typeDesign === "discover" && (
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
                          alt={item.title}
                          style={{
                            width: "100%",
                            height: "300px",
                            objectFit: "cover",
                          }}
                        />
                      }
                    >
                      <Meta
                        avatars={
                          <Avatar
                            className="avatars"
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
                  )}
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    );
  };
  
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!user) {
    return <div>User not found</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

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
          {user[0].name}
        </Typography.Title>
        <Typography.Text
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "15px",
          }}
        >
          {followers} followers
        </Typography.Text>
      </div>

      {/* Artworks section */}
      <div className="secondSection">
        {/* Buttons container */}
        <div
          className="buttonsContainer"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {/* Add buttons if needed */}
        </div>
        
        {/* Render user artworks */}

        
        {renderImages()}
      </div>
      
    </div>

    
    
  );
};

export default UserProfile;
