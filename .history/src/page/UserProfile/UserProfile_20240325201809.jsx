import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = (userId) => { // userId was missing here
      if (userId) { // Ensure userId is defined before making the request
        axios
          .get(`http://localhost:5000/api/users/${userId}`)
          .then((response) => {
            setUser(response.data);
            setLoading(false); // Set loading to false when data is fetched
          })
          .catch((error) => {
            setError("Error fetching user data");
            setLoading(false); // Set loading to false when there's an error
          });
      }
    };

    fetchUser(userId); // Pass userId to fetchUser function
  }, [userId]);


  if (error) {
    return <div>{error}</div>;
  }


  return (
    <div>
        <h1>User Profile</h1>
        <h2>{user.name}</h2>
    </div>
  );
};

export default UserProfile;
