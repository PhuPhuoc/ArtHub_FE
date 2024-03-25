import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [userArtworks, setUserArtworks] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`/api/users/${userId}`);
        if (response.ok) {
          const userData = await response.json();
          setUser(userData.user);
        } else {
          throw new Error("Failed to fetch user data");
        }
      } catch (error) {
        console.error(error);
      }
    };

    const fetchUserArtworks = async () => {
      try {
        const response = await fetch(`/api/users/${userId}/artworks`);
        if (response.ok) {
          const artworks = await response.json();
          setUserArtworks(artworks);
        } else {
          throw new Error("Failed to fetch user artworks");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
    fetchUserArtworks();
  }, [userId]);

  if (!user) {
    return <div>Loading user profile...</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <div>
        <h2>User Details</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        {/* Add more user details as needed */}
      </div>
      <div>
        <h2>User Artworks</h2>
        <ul>
          {userArtworks.map((artwork) => (
            <li key={artwork._id}>
              <p>Title: {artwork.title}</p>
              <p>Description: {artwork.description}</p>
              {/* Add more artwork details as needed */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
