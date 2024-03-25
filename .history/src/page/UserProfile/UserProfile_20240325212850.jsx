import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
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

const UserProfile = () => {
  const { id } = useParams(); // Extract id from URL

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
      <div>
        <h2>User Profile</h2>
        <p>Name: {user[0].name}</p>
        <p>Email: {user[0].email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
