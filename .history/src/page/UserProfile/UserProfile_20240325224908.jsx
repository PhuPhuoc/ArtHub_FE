import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import prf from "../../assets/images/profile.jpg";
import Modal from "react-modal";
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
    const renderImages = () => {
        const handleArtworkClick = (title, description, image) => {
          setModalContent({ title, description, image });
          setModalVisible(true);
        };
        const cart = useSelector((state) => state.cart);
        switch (justify) {
          case "Collection ":
            return;
          case "Saved":
            return;
          case "About":
            return (
              <div className="aboutContain">
                <div
                  className="bestSellerArt"
                  style={{
                    height: "80vh",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    className="rightImage-bestSellerArt"
                    style={{
                      height: "500px",
                      width: "40%",
                      border: "30px solid pink",
                      borderRadius: "8px",
                    }}
                  >
                    <img src="https://i.pinimg.com/564x/8b/e3/f2/8be3f282e48b4a65574a527e6507367e.jpg" />
                  </div>
                  <div
                    className="leftImage-bestSellerArt"
                    style={{ width: "55%", height: "400px" }}
                  >
                    <Typography.Title
                      style={{ fontStyle: "italic", fontWeight: "700" }}
                    >
                      Colorful Female Figure Painting PRINT
                    </Typography.Title>
                    <Typography.Text style={{ fontSize: "25px" }}>
                      This is a painting excavated from Qin Shihuang's tomb during
                      the Qing Dynasty, and was given to Zhuge Liang by Lenardo
                      Divinci from Europe across the Silk Road during his grand
                      opening of the precepts with Lu Bu and Se. Enjoying tea and
                      chatting with Guan Yu, the meaning of the painting is that no
                      matter how chaotic the world is, brilliant colors still
                      linger.
                    </Typography.Text>
                  </div>
                </div>
                <Typography.Title
                  style={{
                    width: "100%",
                    height: "100px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  About US
                </Typography.Title>
                <div
                  className="aboutUs"
                  style={{
                    height: "100vh",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    className="leftInf"
                    style={{ width: "55%", height: "400px" }}
                  >
                    <Typography.Link
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <FaFacebook style={{ fontSize: "50px" }} />
                      https://www.facebook.com/profile.php?id=100070282324266
                    </Typography.Link>
                    <Typography.Link
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <FaInstagram style={{ fontSize: "50px" }} />
                      https://www.instagram.com/divinci_leonardo/
                    </Typography.Link>
                    <Typography.Text>
                      If you need to hire a private painting or portrait painting,
                      please contact us via the link above
                    </Typography.Text>
                  </div>
                  <div
                    className="rightInf"
                    style={{
                      height: "500px",
                      width: "40%",
                      border: "30px solid pink",
                      borderRadius: "8px",
                    }}
                  >
                    <img src="https://i.pinimg.com/736x/2c/e2/ae/2ce2aefedde07c36c75fa787649cfeb2.jpg" />
                  </div>
                </div>
              </div>
            );
    
          default:
            return <div></div>;
        }
      };
  const { id } = useParams(); // Extract id from URL
  const [im, setim] = useState(null);
  const [pim, setpim] = useState(null);
  const [userArtworks, setUserArtworks] = useState([]);

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
      <div className="profile-img" style={{ width: "100%", height: "400px" }}>
        <div className="fileupload">
          <img
            src={im ? im : prf}
          />
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
          {user.name}
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

          
      <div className="secondSection">
        <div
          className="buttonsContainer"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Segmented options={justifyOptions} onChange={setJustify} />
        </div>
        {renderImages()}
        <div className="artworks">
          <div className="artworksContainer">
            {userArtworks.map((artwork, index) => (
              <div className="artworkCard" key={index}>
                {artwork.image && (
                  <img src={artwork.image} alt="" className="artworkImage" />
                )}
                <p style={{ fontWeight: 800, padding: 5, marginTop: 5 }}>
                  {artwork.title}
                </p>
                <p style={{ padding: 5 }}>{artwork.description}</p>
                <div className="modifyArtwork">
                  <button
                    style={{ width: 100 }}
                    className="edit"
                    onClick={handleEditArtwork}
                  >
                    {<EditOutlined />}
               
                    </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>

    
  );
};

export default UserProfile;
