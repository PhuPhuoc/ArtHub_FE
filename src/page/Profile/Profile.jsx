// <<<<<<< HEAD
// import React, { useEffect, useState } from "react";
// import "../../page/Profile/Profile.css";
// import prf from "../../assets/images/profile.jpg";
// import ReactDOM from "react-dom";
// import Modal from "react-modal";
// import Avatar from "react-avatar-edit";
// import { Button, Carousel, Typography } from "antd";

// const Profile = () => {
//   const [im, setim] = useState(null);
//   const [pim, setpim] = useState(null);
//   const customStyles = {
//     content: {
//       top: "50%",
//       left: "50%",
//       right: "auto",
//       bottom: "auto",
//       marginRight: "-50%",
//       transform: "translate(-50%, -50%)",
//     },
//   };

//   const [modalIsOpen, setIsOpen] = React.useState(false);

//   function openModal() {
//     setIsOpen(true);
//   }

//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = "#f00";
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }
//   const onCrop = (i) => {
//     setim(i);
//     setpim(i);
//   };
//   const onClose = () => {
//     closeModal();
//     setpim(null);
//   };

//   return (
//     <div className="profile-img" style={{ width: "100%", height: "800px" }}>
//       <div className="fileupload">
//         <img onClick={openModal} src={im ? im : prf} />
//       </div>
//       <Typography.Title
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           fontWeight: "bold",
//           fontSize: "20px",
//         }}
//       >
//         Kim Bình Mai
//       </Typography.Title>
//       <Typography.Text
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           fontSize: "15px",
//         }}
//       >
//         0 following
//       </Typography.Text>
//       <Modal
//         isOpen={modalIsOpen}
//         onAfterOpen={afterOpenModal}
//         onRequestClose={closeModal}
//         style={customStyles}
//         contentLabel="Example Modal"
//       >
//         <Avatar width={390} height={295} onCrop={onCrop} onClose={onClose} />
//       </Modal>
//       <div className="leftButton" style={{ height: "70vh", width: "48%" }}>
//         <Button
//           style={{
//             height: "50px",
//             display: "flex",
//             justifyContent: "center",
//             width: "40%",
//             alignItems: "center",
//             transform: "translateX(350px) translateY(41px)",
//             borderRadius: "24px",
//             backgroundColor:"#D3D1CC",
//             fontWeight:"bold",
//             fontSize:"17px"
//           }}
//         >Share</Button>
//       </div>
//       <div className="rightButton" style={{ height: "70vh", width: "48%" }}>
//         <Button
//           style={{
//             height: "50px",
//             display: "flex",
//             justifyContent: "center",
//             width: "40%",
//             alignItems: "center",
//             transform: "translateX(700px) translateY(-420px)",
//             borderRadius: "24px",
//             backgroundColor:"#D3D1CC",
//             fontWeight:"bold",
//             fontSize:"17px"
//           }}
//         >Edit Profile</Button>
//       </div>
//     </div>
//   );
// =======

import Cookies from "js-cookie";
import axios from "axios";
import "./Profile.css";
import {
  DeleteOutlined,
  LogoutOutlined,
  EditOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import "../../page/Profile/Profile.css";
import prf from "../../assets/images/profile.jpg";
import Modal from "react-modal";
import Avatar from "react-avatar-edit";
import { Button, Carousel, Typography } from "antd";

const Profile = () => {
  const [sessionCookie, setSessionCookie] = useState("");
  const [userArtworks, setUserArtworks] = useState([]);

  useEffect(() => {
    const cookieValue = Cookies.get("sessionCookie");
    if (cookieValue) {
      setSessionCookie(cookieValue);
      fetchUserPosts(cookieValue);
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
    },
  };

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
  return (
    <div>
      <div className="profile-img" style={{ width: "100%", height: "800px" }}>
        <div className="fileupload">
          <img onClick={openModal} src={im ? im : prf} />
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
          Kim Bình Mai
        </Typography.Title>
        <Typography.Text
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "15px",
          }}
        >
          0 following
        </Typography.Text>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Avatar width={390} height={295} onCrop={onCrop} onClose={onClose} />
        </Modal>
        <div className="leftButton" style={{ height: "70vh", width: "48%" }}>
          <Button
            style={{
              height: "50px",
              display: "flex",
              justifyContent: "center",
              width: "40%",
              alignItems: "center",
              transform: "translateX(350px) translateY(41px)",
              borderRadius: "24px",
              backgroundColor: "#D3D1CC",
              fontWeight: "bold",
              fontSize: "17px",
            }}
          >
            Share
          </Button>
        </div>
        <div className="rightButton" style={{ height: "70vh", width: "48%" }}>
          <Button
            style={{
              height: "50px",
              display: "flex",
              justifyContent: "center",
              width: "40%",
              alignItems: "center",
              transform: "translateX(700px) translateY(-420px)",
              borderRadius: "24px",
              backgroundColor: "#D3D1CC",
              fontWeight: "bold",
              fontSize: "17px",
            }}
          >
            Edit Profile
          </Button>
        </div>
      </div>
      <div className="artworks">
        <h2>Here are your artworks</h2>
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
        <button className="delete" onClick={handleLogout}>
          Logout {<LogoutOutlined />}
        </button>
      </div>
    </div>
  );
};

export default Profile;
