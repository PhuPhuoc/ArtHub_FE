

import Cookies from "js-cookie";
import axios from "axios";
import {
  DeleteOutlined,
  LogoutOutlined,
  EditOutlined,
} from "@ant-design/icons";
import "./Profile.css";
import React, { useEffect, useState } from "react";
import "../../page/Profile/Profile.css";
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
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useSelector } from "react-redux";

const Profile = () => {
  const [sessionCookie, setSessionCookie] = useState("");
  const [userArtworks, setUserArtworks] = useState([]);
  const [user, setUser] = useState([]);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalContent, setModalContent] = React.useState({});

  // Edit Profile
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

  const fetchUser = (userId) => {
    axios
      .get(`http://localhost:5000/api/users/${userId}/info`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user posts:", error);
      });
  };

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

  const [im, setim] = useState(null);
  const [pim, setpim] = useState(null);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "0",
      scroll: "none",
    },
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  const onCrop = (i) => {
    setim(i);
    setpim(i);
  };
  const onClose = () => {
    closeModal();
    setpim(null);
  };
  const justifyOptions = ["Collection", "Saved", "About"];
  const [justify, setJustify] = React.useState(justifyOptions[0]);
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

  return (
    <div>
      <div className="profile-img" style={{ width: "100%", height: "400px" }}>
        <div className="fileupload">
          <img
            onClick={openModal}
            onChange={fetchEditProfile}
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
          12k following
        </Typography.Text>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <Avatar width={390} height={295} onCrop={onCrop} onClose={onClose} />
        </Modal>
        <div className="leftButton" style={{ height: "70vh", width: "48%" }}>
          <Button
            style={{
              height: "50px",
              display: "flex",
              justifyContent: "center",
              width: "30%",
              alignItems: "center",
              transform: "translateX(785px) translateY(41px)",
              borderRadius: "24px",
              backgroundColor: "#D3D1CC",
              fontWeight: "bold",
              fontSize: "17px",
            }}
          >
            Edit Profile
          </Button>
        </div>
        <div className="rightButton" style={{ height: "70vh", width: "48%" }}>
          {/*
          <Button
            style={{
              height: "60px",
              display: "flex",
              justifyContent: "center",
              width: "10%",
              alignItems: "center",
              transform: "translateX(950px) translateY(-640px)",
              backgroundColor: "#D3D1CC",
              fontWeight: "bold",
              fontSize: "17px",
              borderRadius: "40%",
            }}
          >
            ......
          </Button>
          */}
        </div>
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
      </div>
      <button className="delete" onClick={handleLogout}>
        Logout {<LogoutOutlined />}
      </button>
    </div>
  );
};

export default Profile;
