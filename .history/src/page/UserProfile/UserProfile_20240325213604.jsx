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
  const { id } = useParams(); // Extract id from URL

  const [im, setim] = useState(null);
  const [pim, setpim] = useState(null);

  const [user, setUser] = useState(null);
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
    fetchUser();
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
      <h1>User Profile</h1>
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

        </div>
      </div>
    </div>
  );
};

export default UserProfile;
