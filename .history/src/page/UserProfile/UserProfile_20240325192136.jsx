import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [userArtworks, setUserArtworks] = useState([]);

  useEffect(() => {
    
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <h3>Artworks:</h3>
      <ul>
        {userArtworks.map((artwork) => (
          <li key={artwork._id}>
            <h4>{artwork.title}</h4>
            <p>{artwork.description}</p>
            {/* Render other artwork details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
