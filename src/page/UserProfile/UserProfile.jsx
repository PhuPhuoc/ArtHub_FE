import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
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
import {UserAddOutlined} from "@ant-design/icons";
import './UserProfile.css'
import Cookies from "js-cookie";
import {useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { id, followed } = useParams(); // Extract id from URL
  const [im, setim] = useState(null);
  const [pim, setpim] = useState(null);
  const [userArtworks, setUserArtworks] = useState([]);

  const [user, setUser] = useState(null);
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [follow, setFollow] = useState('');
  const [sessionCookie, setSessionCookie] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const cookieValue = Cookies.get("sessionCookie");
    if (cookieValue) {
      setSessionCookie(cookieValue);
    } else {
      navigate("/loginpage");
    }
  }, []);

  useEffect(() => {
    fetchFollow(id, sessionCookie);
  }, []);

  const fetchFollow = async (creatorId, userId) => {
    await axios
        .get(`http://localhost:5000/api/users/${userId}/follow/${creatorId}`)
        .then((res) => {
          console.log(res.data)
          if (res.data.follow === false)
            setFollow('Follow')
          else
            setFollow('Unfollow')
        })
        .catch((e) => {
          console.log(e);
        });
  }

  const fetchFollowers = async () => {
    try {
      const response = await axios.get(
          `http://localhost:5000/api/users/${id}/followers`
      );
      setFollowers(response.data.followers);
      console.log('followers', response.data.followers);
    } catch (error) {
      setError("Error fetching user followers");
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
            `http://localhost:5000/api/users/${id}`
        );
        fetchFollow(id, sessionCookie);
        setUser(response.data.user);
        setLoading(false);
      } catch (error) {
        setError("Error fetching user profile");
        setLoading(false);
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
    fetchFollow(id, sessionCookie)
    fetchUserPosts(id);
    fetchUser();
    fetchFollowers();
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

  const handleFollowCreator = (creatorId) => {
    if (!sessionCookie)
      navigate('/loginpage');
    if (follow === 'Follow') {
      axios
          .post(
              `http://localhost:5000/api/users/${sessionCookie}/follow/${creatorId}`
          )
          .then(() => {
            setFollow("Unfollow");
            fetchFollowers();
            message.success("Creator followed successfully");
          })
          .catch((error) => {
            console.log(error);
          });
    } else {
      axios
          .delete(
              `http://localhost:5000/api/users/${sessionCookie}/follow/${creatorId}`
          )
          .then(() => {
            setFollow("Follow");
            fetchFollowers();
            message.success("Creator unfollowed successfully");
          })
          .catch((error) => {
            console.log(error);
          });
    }
  };


  return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Profile header */}
        <div className="profile-img" style={{ width: "100%", height: "400px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div className="fileupload">
            <img src={im ? im : prf} alt="Profile" style={{ width: "200px", height: "200px", borderRadius: "50%" }} />
          </div>
          <Typography.Title level={3}>{user[0].name}</Typography.Title>
          <Typography.Text>{followers} followers</Typography.Text>
          <button className='buttonFollow' onClick={() => handleFollowCreator(id)}><UserAddOutlined style={{ marginRight: 5 }}/>{follow}</button>
        </div>

        {/* Artworks section */}
        <div className="secondSection" style={{ marginTop: "20px" }}>
          {/* Buttons container */}
          <div className="buttonsContainer" style={{ display: "flex", justifyContent: "center" }}>
            {/* Add buttons if needed */}
          </div>

          {/* Render user artworks */}
          <div className="artworks">
            <div className="artworksContainer">
              {userArtworks.map((artwork, index) => (
                  <div className="artworkCard" key={index}>
                    {artwork.image && (
                        <img src={artwork.image} alt="" className="artworkImage" />
                    )}
                    <p style={{ fontWeight: 800, padding: 5, marginTop: 5 }}>
                      {artwork.title}
                    </p>
                    <p style={{ padding: 5 }}>{artwork.description}</p>
                    {/* Add edit and delete buttons here if needed */}
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default UserProfile;
