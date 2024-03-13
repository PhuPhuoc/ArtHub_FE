// <<<<<<< HEAD
// import React, { useEffect, useState } from "react";
// import "../../page/Profile/Profile.css";
// import prf from "../../assets/images/profile.jpg";
// import ReactDOM from "react-dom";
// import Modal from "react-modal";
// import Avatar from "react-avatar-edit";
// import { Button, Carousel, Typography } from "antd";

// const Profile = () => {
//   const [im, setim] = useState(null);
//   const [pim, setpim] = useState(null);
//   const customStyles = {
//     content: {
//       top: "50%",
//       left: "50%",
//       right: "auto",
//       bottom: "auto",
//       marginRight: "-50%",
//       transform: "translate(-50%, -50%)",
//     },
//   };

//   const [modalIsOpen, setIsOpen] = React.useState(false);

//   function openModal() {
//     setIsOpen(true);
//   }

//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = "#f00";
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }
//   const onCrop = (i) => {
//     setim(i);
//     setpim(i);
//   };
//   const onClose = () => {
//     closeModal();
//     setpim(null);
//   };

//   return (
//     <div className="profile-img" style={{ width: "100%", height: "800px" }}>
//       <div className="fileupload">
//         <img onClick={openModal} src={im ? im : prf} />
//       </div>
//       <Typography.Title
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           fontWeight: "bold",
//           fontSize: "20px",
//         }}
//       >
//         Kim Bình Mai
//       </Typography.Title>
//       <Typography.Text
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           fontSize: "15px",
//         }}
//       >
//         0 following
//       </Typography.Text>
//       <Modal
//         isOpen={modalIsOpen}
//         onAfterOpen={afterOpenModal}
//         onRequestClose={closeModal}
//         style={customStyles}
//         contentLabel="Example Modal"
//       >
//         <Avatar width={390} height={295} onCrop={onCrop} onClose={onClose} />
//       </Modal>
//       <div className="leftButton" style={{ height: "70vh", width: "48%" }}>
//         <Button
//           style={{
//             height: "50px",
//             display: "flex",
//             justifyContent: "center",
//             width: "40%",
//             alignItems: "center",
//             transform: "translateX(350px) translateY(41px)",
//             borderRadius: "24px",
//             backgroundColor:"#D3D1CC",
//             fontWeight:"bold",
//             fontSize:"17px"
//           }}
//         >Share</Button>
//       </div>
//       <div className="rightButton" style={{ height: "70vh", width: "48%" }}>
//         <Button
//           style={{
//             height: "50px",
//             display: "flex",
//             justifyContent: "center",
//             width: "40%",
//             alignItems: "center",
//             transform: "translateX(700px) translateY(-420px)",
//             borderRadius: "24px",
//             backgroundColor:"#D3D1CC",
//             fontWeight:"bold",
//             fontSize:"17px"
//           }}
//         >Edit Profile</Button>
//       </div>
//     </div>
//   );
// =======

import Cookies from "js-cookie";
import axios from "axios";
import {
  DeleteOutlined,
  LogoutOutlined,
  EditOutlined,
} from "@ant-design/icons";
import "./Profile.css";
import React, { useEffect, useState } from "react";
import "../../page/Profile/Profile.css";
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
  Card,
} from "antd";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Profile = () => {
  const [sessionCookie, setSessionCookie] = useState("");
  const [userArtworks, setUserArtworks] = useState([]);
  const [user, setUser] = useState([]);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalContent, setModalContent] = React.useState({});

  useEffect(() => {
    const cookieValue = Cookies.get("sessionCookie");
    if (cookieValue) {
      setSessionCookie(cookieValue);
      fetchUserPosts(cookieValue);
      fetchUser(cookieValue);
    }
  }, []);

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

  const fetchUser = (userId) => {
    axios
      .get(`http://localhost:5000/api/users/${userId}/info`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user posts:", error);
      });
  };

  const handleLogout = () => {
    Cookies.remove("sessionCookie");
    window.location.href = "/loginpage";
  };

  const handleDeleteArtwork = (artworkId) => {
    axios
      .delete(`http://localhost:5000/api/artworks/${artworkId}`)
      .then(() => {
        fetchUserPosts(sessionCookie);
      })
      .catch((error) => {
        console.error("Error deleting artwork:", error);
      });
  };

  const handleEditArtwork = () => {};
  const [im, setim] = useState(null);
  const [pim, setpim] = useState(null);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  const onCrop = (i) => {
    setim(i);
    setpim(i);
  };
  const onClose = () => {
    closeModal();
    setpim(null);
  };
  const justifyOptions = ["Collection", "Work", "About"];
  const [justify, setJustify] = React.useState(justifyOptions[0]);
  const renderImages = () => {
    const handleArtworkClick = (title, description, image) => {
      setModalContent({ title, description, image });
      setModalVisible(true);
    };
    switch (justify) {
      case "Collection ":
        return (
          <div className="imagesContain">
            <div className="title">Images for Foods</div>
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <Card
                  cover={
                    <img
                      src="https://images.unsplash.com/photo-1647169953827-a7c85f324caf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="image"
                    />
                  }
                >
                  <Meta
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      height: "100px",
                    }}
                    avatar={
                      <Avatar
                        className="avatar"
                        src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                        style={{ cursor: "pointer" }}
                      />
                    }
                    title={
                      <span
                        style={{
                          color: "black",
                          fontSize: "15px",
                          borderBottom: "1px solid black",
                        }}
                      >
                        Banh Mi Ha Noi
                      </span>
                    }
                    description={
                      <span style={{ color: "black", fontSize: "12px" }}>
                        This is one of the most delicious traditional food in
                        VietNam
                      </span>
                    }
                  />
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card
                  cover={
                    <img
                      src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="image"
                    />
                  }
                >
                  <Meta
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      height: "100px",
                    }}
                    avatar={
                      <Avatar
                        className="avatar"
                        src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                        style={{ cursor: "pointer" }}
                      />
                    }
                    title={
                      <span
                        style={{
                          color: "black",
                          fontSize: "15px",
                          borderBottom: "1px solid black",
                        }}
                      >
                        Pizza
                      </span>
                    }
                    description={
                      <span style={{ color: "black", fontSize: "12px" }}>
                        pizza evolved from similar flatbread dishes in Naples,
                        Italy, between the 16th and mid-18th century.
                      </span>
                    }
                  />
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card
                  cover={
                    <img
                      src="https://observatoirecetelem.com/wp-content/uploads/2018/03/istock_110933888.5110a165224.original.jpg "
                      alt="image"
                    />
                  }
                >
                  <Meta
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      height: "100px",
                    }}
                    avatar={
                      <Avatar
                        className="avatar"
                        src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                        style={{ cursor: "pointer" }}
                      />
                    }
                    title={
                      <span
                        style={{
                          color: "black",
                          fontSize: "15px",
                          borderBottom: "1px solid black",
                        }}
                      >
                        Foie Gras
                      </span>
                    }
                    description={
                      <span style={{ color: "black", fontSize: "12px" }}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Minus eos voluptates, enim officiis tempore esse
                        voluptatem! Excepturi rem commodi tempora.
                      </span>
                    }
                  />
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card
                  cover={
                    <img
                      src="https://plus.unsplash.com/premium_photo-1676466884050-3b95749bd1eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="image"
                    />
                  }
                >
                  <Meta
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      height: "100px",
                    }}
                    avatar={
                      <Avatar
                        className="avatar"
                        src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                        style={{ cursor: "pointer" }}
                      />
                    }
                    title={
                      <span
                        style={{
                          color: "black",
                          fontSize: "15px",
                          borderBottom: "1px solid black",
                        }}
                      >
                        Taco
                      </span>
                    }
                    description={
                      <span style={{ color: "black", fontSize: "12px" }}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Minus eos voluptates, enim officiis tempore esse
                        voluptatem! Excepturi rem commodi tempora.
                      </span>
                    }
                  />
                </Card>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <Card
                  cover={
                    <img
                      src="https://images.unsplash.com/photo-1509680859026-7d8cfc6894f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="image"
                    />
                  }
                >
                  <Meta
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      height: "100px",
                    }}
                    avatar={
                      <Avatar
                        className="avatar"
                        src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                        style={{ cursor: "pointer" }}
                      />
                    }
                    title={
                      <span
                        style={{
                          color: "black",
                          fontSize: "15px",
                          borderBottom: "1px solid black",
                        }}
                      >
                        Egg Noodles
                      </span>
                    }
                    description={
                      <span style={{ color: "black", fontSize: "12px" }}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Minus eos voluptates, enim officiis tempore esse
                        voluptatem! Excepturi rem commodi tempora.
                      </span>
                    }
                  />
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card
                  cover={
                    <img
                      src="https://plus.unsplash.com/premium_photo-1668143363479-b8cd08698c0d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="image"
                    />
                  }
                >
                  <Meta
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      height: "100px",
                    }}
                    avatar={
                      <Avatar
                        className="avatar"
                        src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                        style={{ cursor: "pointer" }}
                      />
                    }
                    title={
                      <span
                        style={{
                          color: "black",
                          fontSize: "15px",
                          borderBottom: "1px solid black",
                        }}
                      >
                        Curry
                      </span>
                    }
                    description={
                      <span style={{ color: "black", fontSize: "12px" }}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Minus eos voluptates, enim officiis tempore esse
                        voluptatem! Excepturi rem commodi tempora.
                      </span>
                    }
                  />
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card
                  cover={
                    <img
                      src="https://images.unsplash.com/photo-1631709497146-a239ef373cf1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="image"
                    />
                  }
                >
                  <Meta
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      height: "100px",
                    }}
                    avatar={
                      <Avatar
                        className="avatar"
                        src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                        style={{ cursor: "pointer" }}
                      />
                    }
                    title={
                      <span
                        style={{
                          color: "black",
                          fontSize: "15px",
                          borderBottom: "1px solid black",
                        }}
                      >
                        Pho Ha Noi
                      </span>
                    }
                    description={
                      <span style={{ color: "black", fontSize: "12px" }}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Minus eos voluptates, enim officiis tempore esse
                        voluptatem! Excepturi rem commodi tempora.
                      </span>
                    }
                  />
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card
                  cover={
                    <img
                      src="https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="image"
                    />
                  }
                >
                  <Meta
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      height: "100px",
                    }}
                    avatar={
                      <Avatar
                        className="avatar"
                        src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                        style={{ cursor: "pointer" }}
                      />
                    }
                    title={
                      <span
                        style={{
                          color: "black",
                          fontSize: "15px",
                          borderBottom: "1px solid black",
                        }}
                      >
                        A bottle of Soup
                      </span>
                    }
                    description={
                      <span style={{ color: "black", fontSize: "12px" }}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Minus eos voluptates, enim officiis tempore esse
                        voluptatem! Excepturi rem commodi tempora.
                      </span>
                    }
                  />
                </Card>
              </Col>
            </Row>
          </div>
        );
      case "About":
        return (
          <div className="aboutContain">
            <div
              className="bestSellerArt"
              style={{
                height: "80vh",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                className="rightImage-bestSellerArt"
                style={{
                  height: "500px",
                  width: "40%",
                  border: "30px solid pink",
                  borderRadius: "8px",
                }}
              >
                <img src="https://i.pinimg.com/564x/8b/e3/f2/8be3f282e48b4a65574a527e6507367e.jpg" />
              </div>
              <div
                className="leftImage-bestSellerArt"
                style={{ width: "55%", height: "400px" }}
              >
                <Typography.Title
                  style={{ fontStyle: "italic", fontWeight: "700" }}
                >
                  Colorful Female Figure Painting PRINT
                </Typography.Title>
                <Typography.Text style={{ fontSize: "25px" }}>
                  This is a painting excavated from Qin Shihuang's tomb during
                  the Qing Dynasty, and was given to Zhuge Liang by Lenardo
                  Divinci from Europe across the Silk Road during his grand
                  opening of the precepts with Lu Bu and Se. Enjoying tea and
                  chatting with Guan Yu, the meaning of the painting is that no
                  matter how chaotic the world is, brilliant colors still
                  linger.
                </Typography.Text>
              </div>
            </div>
            <Typography.Title
              style={{
                width: "100%",
                height: "100px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              About US
            </Typography.Title>
            <div
              className="aboutUs"
              style={{
                height: "100vh",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                className="leftInf"
                style={{ width: "55%", height: "400px" }}
              >
                <Typography.Link
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <FaFacebook style={{ fontSize: "50px" }} />
                  https://www.facebook.com/profile.php?id=100070282324266
                </Typography.Link>
                <Typography.Link
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <FaInstagram style={{ fontSize: "50px" }} />
                  https://www.instagram.com/divinci_leonardo/
                </Typography.Link>
                <Typography.Text>
                If you need to hire a private painting or portrait painting, please contact us via the link above
                </Typography.Text>
              </div>
              <div
                className="rightInf"
                style={{
                  height: "500px",
                  width: "40%",
                  border: "30px solid pink",
                  borderRadius: "8px",
                }}
              >
                <img src="https://i.pinimg.com/736x/2c/e2/ae/2ce2aefedde07c36c75fa787649cfeb2.jpg" />
              </div>
            </div>
          </div>
        );

      default:
        return <div>No images found</div>;
    }
  };

  return (
    <div>
      <div className="profile-img" style={{ width: "100%", height: "400px" }}>
        <div className="fileupload">
          <img onClick={openModal} src={im ? im : prf} />
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
          {user.name}
        </Typography.Title>
        <Typography.Text
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "15px",
          }}
        >
          0 following
        </Typography.Text>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Avatar width={390} height={295} onCrop={onCrop} onClose={onClose} />
        </Modal>
        <div className="leftButton" style={{ height: "70vh", width: "48%" }}>
          <Button
            style={{
              height: "50px",
              display: "flex",
              justifyContent: "center",
              width: "30%",
              alignItems: "center",
              transform: "translateX(650px) translateY(41px)",
              borderRadius: "24px",
              backgroundColor: "#D3D1CC",
              fontWeight: "bold",
              fontSize: "17px",
            }}
          >
            Edit Profile
          </Button>
        </div>
        <div className="rightButton" style={{ height: "70vh", width: "48%" }}>
          {/*
          <Button
            style={{
              height: "60px",
              display: "flex",
              justifyContent: "center",
              width: "10%",
              alignItems: "center",
              transform: "translateX(950px) translateY(-640px)",
              backgroundColor: "#D3D1CC",
              fontWeight: "bold",
              fontSize: "17px",
              borderRadius: "40%",
            }}
          >
            ......
          </Button>
        </div>
      </div>

      <div className="secondSection">
        <div
          className="buttonsContainer"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Segmented options={justifyOptions} onChange={setJustify} />
        </div>
        {renderImages()}
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
                <div className="modifyArtwork">
                  <button
                    style={{ width: 100 }}
                    className="edit"
                    onClick={handleEditArtwork}
                  >
                    {<EditOutlined />}
                  </button>
                  <button
                    style={{ width: 100 }}
                    className="delete"
                    onClick={() => handleDeleteArtwork(artwork._id)}
                  >
                    {<DeleteOutlined />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button className="delete" onClick={handleLogout}>
        Logout {<LogoutOutlined />}
      </button>
    </div>
  );
};

export default Profile;
