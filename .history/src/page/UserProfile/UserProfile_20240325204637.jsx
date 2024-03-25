import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'antd';
const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleAlert = () => {  
    alert(`Username: ${user.name}`);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/65dd7f704c6e814fc58cf6be`);
        setUser(response.data.user);
        setLoading(false);
        console.log(response.data.user)
        console.log(response.data.user.name)
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
          <Button onClick={handleAlert}>name</Button>
          <p>Email: {user._id}</p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
