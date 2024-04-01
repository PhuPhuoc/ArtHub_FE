import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
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
  Card, message,
} from "antd";
import { useSelector } from "react-redux";
import ArtworkCard from "../../components/ArtWorkCard.jsx";
import Cookies from "js-cookie";
import {UserAddOutlined} from "@ant-design/icons";
import './UserProfile.css';
const UserProfile = () => {
    
  const { id } = useParams(); // Extract id from URL
  const [im, setim] = useState(null);
  const [pim, setpim] = useState(null);
  const [userArtworks, setUserArtworks] = useState([]);
  const [follow, setFollow] = useState('Follow')

  const [user, setUser] = useState(null);
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sessionCookie, setSessionCookie] = useState("");

  useEffect(() => {
    const cookieValue = Cookies.get("sessionCookie");
    if (cookieValue) {
      setSessionCookie(cookieValue);
    }
  }, []);

  const handleFollowCreator = (creatorId) => {
    if (follow === 'Follow') {
      axios
          .post(`http://localhost:5000/api/users/${sessionCookie}/follow/${creatorId}`)
          .then(() => {
            setFollow('Unfollow');
            setFollowers(prevFollowers => prevFollowers + 1);
            message.success('Creator followed successfully');
          })
          .catch((error) => {
            console.log(error);
          });
    } else {
      axios
          .delete(`http://localhost:5000/api/users/${sessionCookie}/follow/${creatorId}`)
          .then(() => {
            setFollow('Follow');
            setFollowers(prevFollowers => prevFollowers - 1);
            message.success('Creator unfollowed successfully');
          })
          .catch((error) => {
            console.log(error);
          })
    }
  };



  const fetchFollow = (userId, creatorId) => {
    axios
        .get(`http://localhost:5000/api/users/${sessionCookie}/follow/${creatorId}`)
        .then((res) => {
          if (res.data.follow === true)
            setFollow('Unfollow');
          else
            setFollow('Follow');
        })
  };

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

    const fetchFollowers = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/${id}/followers`);
        setFollowers(response.data.followers);
        console.log(response.data.followers);
      } catch (error) {
        setError('Error fetching user followers');
      }
    };
    const fetchUserPosts = (userId) => {
        axios
          .get(`http://localhost:5000/api/users/${userId}/artworks`)
          .then((response) => {
            setUserArtworks(response.data);
          })
          .catch((error) => {
            console.error("Error fetching user posts:", error);
          });
      };
    fetchUserPosts(id);
    fetchUser();
    fetchFollowers();
    fetchFollow(sessionCookie, id);
  }, [id]);

  const renderImages = () => {
    const handleArtworkClick = (title, description, image) => {
      // Handle artwork click logic
    };

    return (
      <div className="artworks">
        <div className="artworksContainer">
          {userArtworks.map((artwork, index) => (
              <ArtworkCard key={index} artwork={artwork} />
          ))}
        </div>
      </div>
    );
  };

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
      {/* Profile header */}
      <div className="profile-img" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: "100%", height: "400px" }}>
        <div className="fileupload">
          <img src={im ? im : prf} />
        </div>
        <Typography.Title
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          {user[0].name}
        </Typography.Title>
        <Typography.Text
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "15px",
          }}
        >
          {followers} followers
        </Typography.Text>
        <Button className='button' onClick={() => handleFollowCreator(id)}><UserAddOutlined />{follow}</Button>

      </div>

      {/* Artworks section */}
      <div className="secondSection">
        {/* Buttons container */}
        <div
          className="buttonsContainer"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {/* Add buttons if needed */}
        </div>
        
        {/* Render user artworks */}
        <div className="artworks">
          <div className="artworksContainer">
            {userArtworks?.map((artwork, index) => (
                <ArtworkCard key={index} artworkData={artwork} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
