import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = (userId) => {
        axios
          .get(`http://localhost:5000/api/users/${userId}`)
          .then((response) => {
            setUser(response.data);
          })
          .catch((error) => {
            console.error("Error fetching user posts:", error);
          });
      };
    

    fetchUser();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  if (!user) {
    return <div>User not found.</div>;
  }
  

  return (
    <div>
        <h1>User Profile</h1>
        <h2>{user.name}</h2>
    </div>
  );
};

export default UserProfile;
