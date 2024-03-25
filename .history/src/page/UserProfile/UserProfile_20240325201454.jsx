import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/users/65e6da5f7b8a0e3bd12148df`);
        setUser(response.data.user);
        console.l
        setLoading(false);
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
