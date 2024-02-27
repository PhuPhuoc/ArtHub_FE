import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import "./Profile.css";
import { DeleteOutlined, LogoutOutlined, EditOutlined } from "@ant-design/icons";

const Profile = () => {
    const [sessionCookie, setSessionCookie] = useState('');
    const [userArtworks, setUserArtworks] = useState([]);

    useEffect(() => {
        const cookieValue = Cookies.get('sessionCookie');
        if (cookieValue) {
            setSessionCookie(cookieValue);
            fetchUserPosts(cookieValue);
        }
    }, []);

    const fetchUserPosts = (userId) => {
        axios.get(`http://localhost:5000/api/users/${userId}/artworks`)
            .then(response => {
                setUserArtworks(response.data);
            })
            .catch(error => {
                console.error('Error fetching user posts:', error);
            });
    };

    const handleLogout = () => {
        Cookies.remove('sessionCookie');
        window.location.href = '/loginpage';
    };

    const handleDeleteArtwork = (artworkId) => {
        axios.delete(`http://localhost:5000/api/artworks/${artworkId}`)
            .then(response => {
                fetchUserPosts(sessionCookie);
            })
            .catch(error => {
                console.error('Error deleting artwork:', error);
            });
    };

    const handleEditArtwork = () => {

    };

    return (
        <div>
            <h1>Your profile</h1>
            <div className="artworks">
                <h2>Here are your artworks</h2>
                <div className="artworksContainer">
                    {userArtworks.map((artwork, index) => (
                        <div className="artworkCard" key={index}>
                            {artwork.image && <img src={artwork.image} alt='' className="artworkImage" />}
                            <p style={{fontWeight: 800, padding: 5, marginTop: 5}}>{artwork.title}</p>
                            <p style={{padding: 5}}>{artwork.description}</p>
                            <div className="modifyArtwork">
                                <button style={{width: 100}} className="edit" onClick={handleEditArtwork}>{<EditOutlined/>}</button>
                                <button style={{width: 100}} className="delete" onClick={() => handleDeleteArtwork(artwork._id)}>{<DeleteOutlined/>}</button>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="delete" onClick={handleLogout}>Logout {<LogoutOutlined/>}</button>
            </div>
        </div>
    );
};

export default Profile;
