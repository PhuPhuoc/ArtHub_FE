import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'antd';
const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/65e6da5f7b8a0e3bd12148df`);
        setUser(response.data.user);
        setLoading(false);
        console.log(response.data.user)
      } catch (error) {
        setError('Error fetching user profile');
        setLoading(false);
        
      }
    };
    fetchUser();
  }, [userId]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if(!user)
  {
    return <div>User not found</div>
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
        <h1>User Profile</h1>
      {user && (
        <div>
          <h2>User Profile</h2>
          <Button onClick="">name</Button>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
