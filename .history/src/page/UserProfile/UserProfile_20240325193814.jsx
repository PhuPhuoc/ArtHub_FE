import Cookies from "js-cookie";
import axios from "axios";
import React, { useEffect, useState } from "react";
import prf from "../../assets/images/profile.jpg";
import Modal from "react-modal";
import Avatar from "react-avatar-edit";
import {
  Typography,
  Button,
} from "antd";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const UserProfile = () => {
  const [sessionCookie, setSessionCookie] = useState("");
  const [user, setUser] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);
  const [newPicture, setNewPicture] = useState("");
  const [newName, setNewName] = useState("");
  const [newMail, setNewMail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [im, setim] = useState(null);
  const [pim, setpim] = useState(null);

  useEffect(() => {
    const cookieValue = Cookies.get("sessionCookie");
    if (cookieValue) {
      setSessionCookie(cookieValue);
      fetchUserData(cookieValue);
    }
  }, []);

  const fetchUserData = (userId) => {
    axios
      .get(`http://localhost:5000/api/users/${userId}/info`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // Any action after opening the modal
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onCrop = (i) => {
    setim(i);
    setpim(i);
  };

  const onClose = () => {
    closeModal();
    setpim(null);
  };

  const handleEditProfile = () => {
    // Perform edit profile logic here
  };

  return (
    <div>
      <div className="profile-img" style={{ width: "100%", height: "400px" }}>
        <div className="fileupload">
          <img
            onClick={openModal}
            src={im ? im : prf}
            alt="Profile"
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
          {user.followers} followers
        </Typography.Text>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Profile Picture Modal"
          ariaHideApp={false}
        >
          <Avatar width={390} height={295} onCrop={onCrop} onClose={onClose} />
        </Modal>
        <div className="editButton">
          <Button onClick={handleEditProfile}>Edit Profile</Button>
        </div>
      </div>
      <div className="userDetails">
        <Typography.Text>Email: {user.email}</Typography.Text>
        {/* Add more user details here */}
      </div>
      <div className="socialLinks">
        <Typography.Link href={user.facebookLink}>
          <FaFacebook /> Facebook
        </Typography.Link>
        <Typography.Link href={user.instagramLink}>
          <FaInstagram /> Instagram
        </Typography.Link>
      </div>
    </div>
  );
};

export default UserProfile;
