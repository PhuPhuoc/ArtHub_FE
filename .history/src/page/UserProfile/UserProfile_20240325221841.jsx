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
  const [folowers, setfolowers] = useState([]); 
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

    const fetchFolowers = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/flowers/${id}`);
            setim(response.data.flower);
            setLoading(false);
        } catch (error) {
            setError('Error fetching user profile');
            setLoading(false);
        }
        }
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
          12k following
        </Typography.Text>
      </div>
    </div>
  );
};

export default UserProfile;
