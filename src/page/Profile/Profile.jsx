import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

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

    return (
        <div>
            <h1>Your profile</h1>
            {userArtworks.map((artwork, index) => (
                <div key={index}>
                    <h2>{artwork.title}</h2>
                    <p>{artwork.description}</p>
                </div>
            ))}
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Profile;
