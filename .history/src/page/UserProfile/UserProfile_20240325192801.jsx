import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  // Extract userId from URL parameters
  const { userId } = useParams();

  // State to store user data
  const [userData, setUserData] = useState(null);

  // Function to fetch user data based on userId
  const fetchUserData = async () => {
    try {
      // Placeholder API endpoint to fetch user data
      const response = await fetch(`https://api.example.com/users/${userId}`);
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      } else {
        throw new Error("Failed to fetch user data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch user data when component mounts or userId changes
  useEffect(() => {
    fetchUserData();
  }, [userId]);

  // Render loading state while fetching user data
  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <h2>User ID: {userId}</h2>
      <h3>Name: {userData.name}</h3>
      <p>Email: {userData.email}</p>
      {/* Render other user details as needed */}
    </div>
  );
};

export default UserProfile;
