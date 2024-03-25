import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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
        <p>Name: {user[].name}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
