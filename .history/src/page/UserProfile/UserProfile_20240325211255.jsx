import Cookies from "js-cookie";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Avatar from "react-avatar-edit";
import { Button, Typography } from "antd";
import { DeleteOutlined, LogoutOutlined, EditOutlined } from "@ant-design/icons";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import prf from "../../assets/images/profile.jpg";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';


const UserProfile = () => {
  const [sessionCookie, setSessionCookie] = useState("");
  const [userArtworks, setUserArtworks] = useState([]);
  const [user, setUser] = useState([]);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalContent, setModalContent] = React.useState({});

  // Edit Profile
  const { userId } = useParams(); // Extract id from URL

  const [newPicture, setNewPicture] = useState("");
  const [newName, setNewName] = useState("");
  const [newMail, setNewMail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const fetchEditProfile = (userId) => {
    const response = axios.put(`http://localhost:5000/api/users/${userId}`, {
      name: newName,
      mail: newMail,
      password: newPassword,
      picture: newPicture,
    });

    if (!response) {
      console.log("Error fetching edit on profile");
    }
  };

  useEffect(() => {
    const cookieValue = Cookies.get("sessionCookie");
    if (cookieValue) {
      setSessionCookie(cookieValue);
      fetchUserPosts(cookieValue);
      fetchUser(cookieValue);
    }
  }, []);

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
  fetchUser();
}, [id]);

  const handleLogout = () => {
    Cookies.remove("sessionCookie");
    window.location.href = "/loginpage";
  };

  const handleDeleteArtwork = (artworkId) => {
    axios
      .delete(`http://localhost:5000/api/artworks/${artworkId}`)
      .then(() => {
        fetchUserPosts(sessionCookie);
      })
      .catch((error) => {
        console.error("Error deleting artwork:", error);
      });
  };


  const handleEditArtwork = () => {};

  return (
    <div>
      <div className="profile-img" style={{ width: "100%", height: "400px" }}>
        <div className="fileupload">
          <img src={user[0]?.picture || prf} alt="Profile" />
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
          {user[0]?.name}
        </Typography.Title>
        <Typography.Text
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "15px",
          }}
        >
          12k following
        </Typography.Text>
      </div>

      <div className="artworks">
        <div className="artworksContainer">
          {user[0]?.artworks.map((artwork, index) => (
            <div className="artworkCard" key={index}>
              {artwork.image && (
                <img src={artwork.image} alt={`Artwork ${index}`} className="artworkImage" />
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
                <button
                  style={{ width: 100 }}
                  className="delete"
                  onClick={() => handleDeleteArtwork(artwork._id)}
                >
                  {<DeleteOutlined />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="delete" onClick={handleLogout}>
        Logout {<LogoutOutlined />}
      </button>
    </div>
  );
};

export default UserProfile;
