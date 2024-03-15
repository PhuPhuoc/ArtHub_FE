import { Button, Carousel, Typography, Col, Row, Card, Avatar } from "antd";
import Meta from "antd/es/card/Meta";
import "./HomePage.css";
import ReactPlayer from "react-player";
import { FaRegSmile, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  const cookieValue = Cookies.get("sessionCookie");
  const handleLearnAboutHiring = () => {
    navigate("/findtalent");
  };

  const handleBrowseMoreInspiration = () => {
    navigate("/ourhub");
  };

  const [isMuted, setIsMuted] = useState(false);
  const [buttonColor, setButtonColor] = useState("palevioletred");
  const [sessionCookie, setSessionCookie] = useState("");
  const [username, setUsername] = useState("");
  const [artworks, setArtworks] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newColor = getRandomColor();
      setButtonColor(newColor);
    }, 1500);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const cookieValue = Cookies.get("sessionCookie");
    if (cookieValue) {
      setSessionCookie(cookieValue);
      fetchUsername(cookieValue);
      fetchArtworks();
    }
  }, []);

    const fetchArtworks = () => {
        axios
            .get('http://localhost:5000/api/homepage/artworks')
            .then((response) => {
                setArtworks(response.data.artworks);
            })
            .catch((error) => {
                console.error('Error fetching artworks:', error);
            })
    }

  const fetchUsername = (userId) => {
    axios
      .get(`http://localhost:5000/api/users/${userId}/info`)
      .then((response) => {
        setUsername(response.data.name);
      })
      .catch((error) => {
        console.error("Error fetching user infos:", error);
      });
  };

  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
  // const [buttonClicked, setButtonClicked] = useState(false);
  const nextSection = useRef(null);

  const handleButtonClick = () => {
    // setButtonClicked(true);
    setTimeout(() => {
      scrollToNextSection();
    }, 800);
  };

  const scrollToNextSection = () => {
    const firstSection = nextSection.current;
    if (firstSection) {
      window.scrollTo({
        top: firstSection.offsetTop,
        behavior: "smooth",
        duration: 2000,
      });
    }
  };

  return (
    <div className="home" style={{ minHeight: "100vh" }}>
      {sessionCookie ? (
        <div
          style={{
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "50px",
            color: buttonColor,
            transition: "all 0.3s ease ",
          }}
        >
          {/* Welcome, {username.toString()} */}
          {username ? (
            <div>
              <p style={{ display: "flex", gap: "20px" }}>
                Welcome, {username.toString()}
                <span className="fas fa-user-circle">
                  <FaRegSmile />
                </span>
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <p></p>
      )}
      <div>
        <div
          className="first-button"
          style={{
            height: "200px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            style={{
              height: "60px",
              borderRadius: "40px",
              width: "420px",
              transition: "background-color 0.3s ease",
              backgroundColor: buttonColor,
            }}
          >
            <Typography.Text style={{ fontSize: "20px" }}>
              Over 3 million ready-to-work creatives !
            </Typography.Text>
          </Button>
        </div>
        <div
          className="headingTitle"
          style={{
            height: "500px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography.Title
            style={{
              fontSize: "70px",
              display: "flex",
              textAlign: "center",
              transform: "translateY(-30px)",
              color: "black",
              fontWeight: 900,
            }}
            className="custom-title"
          >
            The world’s destination <br /> for design
          </Typography.Title>
          <Typography.Text
            style={{
              fontSize: "20px",
              display: "flex",
              textAlign: "center",
              transform: "translateY(-20px)",
              fontWeight: "600",
              color: "black",
            }}
          >
            Get inspired by the work of millions of top-rated designers &
            agencies around the world.
          </Typography.Text>
          <div className="btn-getStarted">
            <Button
              style={{
                height: "50px",
                width: "200px",
                borderRadius: "30px",
                backgroundColor: "black",
                color: "white",
              }}
              onClick={handleButtonClick}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>

      <div
        className="firstSection"
        ref={nextSection}
        style={{
          overflow: "hidden",
          marginTop: "100px",
          borderTop: "5px dashed black",
          paddingTop: "100px",
        }}
      >
        <Carousel autoplay autoplaySpeed={3000}>
          <div>
            <img
              src="https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image 1"
              style={{ width: "100%", height: "90vh", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image 2"
              style={{
                width: "100%",
                height: "90vh",
                objectFit: "cover",
              }}
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1682685796014-2f342188a635?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image 3"
              style={{ width: "100%", height: "90vh", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1707563216156-e33bf94d36c8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image 4"
              style={{ width: "100%", height: "90vh", objectFit: "cover" }}
            />
          </div>
        </Carousel>
      </div>
      <div
        className="secondSection"
        style={{ height: "150vh", position: "relative", paddingTop: "200px" }}
      >
        <Typography.Title style={{ paddingBottom: "100px" }}>
          History of Picasso
        </Typography.Title>
        <ReactPlayer
          url="https://vimeo.com/266322011"
          width="100%"
          height="90vh"
          loop={true}
          autoplay={true}
          playing={true}
          volume={isMuted ? 1 : 0}
        />
        {isMuted ? (
          <FaVolumeUp
            className="btnVolume"
            onClick={() => setIsMuted((prev) => !prev)}
          />
        ) : (
          <FaVolumeMute
            className="btnVolume"
            onClick={() => setIsMuted((prev) => !prev)}
          />
        )}
      </div>
      <div
        className="thirdSection"
        style={{
          paddingTop: "30px",
        }}
      >
        <Typography.Title
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "70px",
          }}
        >
          Explore Inspiring Designs
        </Typography.Title>

        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <Card
              cover={
                <img
                  src="https://images.unsplash.com/photo-1701332774516-48309a0e3599?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image"
                />
              }
            >
              <Meta
                style={{ display: "flex", justifyContent: "center" }}
                avatar={
                  <Avatar
                    className="avatar"
                    src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                    style={{ cursor: "pointer" }}
                  />
                }
                title={
                  <span style={{ color: "black", fontSize: "15px" }}>
                    Custom Title
                  </span>
                }
                description={
                  <span style={{ color: "black", fontSize: "12px" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minus eos voluptates, enim officiis tempore esse voluptatem!
                    Excepturi rem commodi tempora.
                  </span>
                }
              />
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              cover={
                <img
                  src="https://images.unsplash.com/photo-1708394534994-4e66c2b09e1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image"
                />
              }
            >
              <Meta
                style={{ display: "flex", justifyContent: "center" }}
                avatar={
                  <Avatar
                    className="avatar"
                    src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                    style={{ cursor: "pointer" }}
                  />
                }
                title={
                  <span style={{ color: "black", fontSize: "15px" }}>
                    Custom Title
                  </span>
                }
                description={
                  <span style={{ color: "black", fontSize: "12px" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minus eos voluptates, enim officiis tempore esse voluptatem!
                    Excepturi rem commodi tempora.
                  </span>
                }
              />
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              cover={
                <img
                  src="https://images.unsplash.com/photo-1694206078595-460a3ec27772?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image"
                />
              }
            >
              <Meta
                style={{ display: "flex", justifyContent: "center" }}
                avatar={
                  <Avatar
                    className="avatar"
                    src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                    style={{ cursor: "pointer" }}
                  />
                }
                title={
                  <span style={{ color: "black", fontSize: "15px" }}>
                    Custom Title
                  </span>
                }
                description={
                  <span style={{ color: "black", fontSize: "12px" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minus eos voluptates, enim officiis tempore esse voluptatem!
                    Excepturi rem commodi tempora.
                  </span>
                }
              />
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              cover={
                <img
                  src="https://images.unsplash.com/photo-1701981652870-48e6f5c5498c?q=80&w=2115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image"
                />
              }
            >
              <Meta
                style={{
                  display: "flex",
                  justifyContent: "center",
                  height: "114px",
                }}
                avatar={
                  <Avatar
                    className="avatar"
                    src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                    style={{ cursor: "pointer" }}
                  />
                }
                title={
                  <span style={{ color: "black", fontSize: "15px" }}>
                    Custom Title
                  </span>
                }
                description={
                  <span style={{ color: "black", fontSize: "12px" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minus eos voluptates, enim officiis tempore esse voluptatem!
                    Excepturi rem commodi tempora.
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
                  src="https://images.unsplash.com/photo-1637243175600-39d3f62dad04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image"
                />
              }
            >
              <Meta
                style={{ display: "flex", justifyContent: "center" }}
                avatar={
                  <Avatar
                    className="avatar"
                    src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                    style={{ cursor: "pointer" }}
                  />
                }
                title={
                  <span style={{ color: "black", fontSize: "15px" }}>
                    Custom Title
                  </span>
                }
                description={
                  <span style={{ color: "black", fontSize: "12px" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minus eos voluptates, enim officiis tempore esse voluptatem!
                    Excepturi rem commodi tempora.
                  </span>
                }
              />
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              cover={
                <img
                  src="https://images.unsplash.com/photo-1547333041-8c938965d679?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image"
                />
              }
            >
              <Meta
                style={{ display: "flex", justifyContent: "center" }}
                avatar={
                  <Avatar
                    className="avatar"
                    src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                    style={{ cursor: "pointer" }}
                  />
                }
                title={
                  <span style={{ color: "black", fontSize: "15px" }}>
                    Custom Title
                  </span>
                }
                description={
                  <span style={{ color: "black", fontSize: "12px" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minus eos voluptates, enim officiis tempore esse voluptatem!
                    Excepturi rem commodi tempora.
                  </span>
                }
              />
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              cover={
                <img
                  src="https://images.unsplash.com/photo-1524561935602-6ec7560f5526?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image"
                />
              }
            >
              <Meta
                style={{ display: "flex", justifyContent: "center" }}
                avatar={
                  <Avatar
                    className="avatar"
                    src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                    style={{ cursor: "pointer" }}
                  />
                }
                title={
                  <span style={{ color: "black", fontSize: "15px" }}>
                    Custom Title
                  </span>
                }
                description={
                  <span style={{ color: "black", fontSize: "12px" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minus eos voluptates, enim officiis tempore esse voluptatem!
                    Excepturi rem commodi tempora.
                  </span>
                }
              />
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              cover={
                <img
                  src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image"
                />
              }
            >
              <Meta
                style={{ display: "flex", justifyContent: "center" }}
                avatar={
                  <Avatar
                    className="avatar"
                    src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                    style={{ cursor: "pointer" }}
                  />
                }
                title={
                  <span style={{ color: "black", fontSize: "15px" }}>
                    Custom Title
                  </span>
                }
                description={
                  <span style={{ color: "black", fontSize: "12px" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minus eos voluptates, enim officiis tempore esse voluptatem!
                    Excepturi rem commodi tempora.
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
                  src="https://images.unsplash.com/photo-1575201647632-45fae95c9ce4?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image"
                />
              }
            >
              <Meta
                style={{ display: "flex", justifyContent: "center" }}
                avatar={
                  <Avatar
                    className="avatar"
                    src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                    style={{ cursor: "pointer" }}
                  />
                }
                title={
                  <span style={{ color: "black", fontSize: "15px" }}>
                    Custom Title
                  </span>
                }
                description={
                  <span style={{ color: "black", fontSize: "12px" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minus eos voluptates, enim officiis tempore esse voluptatem!
                    Excepturi rem commodi tempora.
                  </span>
                }
              />
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              cover={
                <img
                  src="https://images.unsplash.com/photo-1646552341269-90c328bda15f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image"
                />
              }
            >
              <Meta
                style={{ display: "flex", justifyContent: "center" }}
                avatar={
                  <Avatar
                    className="avatar"
                    src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                    style={{ cursor: "pointer" }}
                  />
                }
                title={
                  <span style={{ color: "black", fontSize: "15px" }}>
                    Custom Title
                  </span>
                }
                description={
                  <span style={{ color: "black", fontSize: "12px" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minus eos voluptates, enim officiis tempore esse voluptatem!
                    Excepturi rem commodi tempora.
                  </span>
                }
              />
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              cover={
                <img
                  src="https://images.unsplash.com/photo-1615338847310-5257bfb8b589?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image"
                />
              }
            >
              <Meta
                style={{ display: "flex", justifyContent: "center" }}
                avatar={
                  <Avatar
                    className="avatar"
                    src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                    style={{ cursor: "pointer" }}
                  />
                }
                title={
                  <span style={{ color: "black", fontSize: "15px" }}>
                    Custom Title
                  </span>
                }
                description={
                  <span style={{ color: "black", fontSize: "12px" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minus eos voluptates, enim officiis tempore esse voluptatem!
                    Excepturi rem commodi tempora.
                  </span>
                }
              />
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              cover={
                <img
                  src="https://images.unsplash.com/photo-1512944159308-fbe53a63b779?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image"
                />
              }
            >
              <Meta
                style={{ display: "flex", justifyContent: "center" }}
                avatar={
                  <Avatar
                    className="avatar"
                    src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                    style={{ cursor: "pointer" }}
                  />
                }
                title={
                  <span style={{ color: "black", fontSize: "15px" }}>
                    Custom Title
                  </span>
                }
                description={
                  <span style={{ color: "black", fontSize: "12px" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minus eos voluptates, enim officiis tempore esse voluptatem!
                    Excepturi rem commodi tempora.
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
                  src="https://plus.unsplash.com/premium_photo-1663013336780-bbfd0b1473b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image"
                />
              }
            >
              <Meta
                style={{ display: "flex", justifyContent: "center" }}
                avatar={
                  <Avatar
                    className="avatar"
                    src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                    style={{ cursor: "pointer" }}
                  />
                }
                title={
                  <span style={{ color: "black", fontSize: "15px" }}>
                    Custom Title
                  </span>
                }
                description={
                  <span style={{ color: "black", fontSize: "12px" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minus eos voluptates, enim officiis tempore esse voluptatem!
                    Excepturi rem commodi tempora.
                  </span>
                }
              />
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              cover={
                <img
                  src="https://plus.unsplash.com/premium_photo-1705583864718-71cdbb830c79?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image"
                />
              }
            >
              <Meta
                style={{ display: "flex", justifyContent: "center" }}
                avatar={
                  <Avatar
                    className="avatar"
                    src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                    style={{ cursor: "pointer" }}
                  />
                }
                title={
                  <span style={{ color: "black", fontSize: "15px" }}>
                    Custom Title
                  </span>
                }
                description={
                  <span style={{ color: "black", fontSize: "12px" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minus eos voluptates, enim officiis tempore esse voluptatem!
                    Excepturi rem commodi tempora.
                  </span>
                }
              />
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              cover={
                <img
                  src="https://plus.unsplash.com/premium_photo-1674831509063-e68252300846?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
                  alt="image"
                />
              }
            >
              <Meta
                style={{ display: "flex", justifyContent: "center" }}
                avatar={
                  <Avatar
                    className="avatar"
                    src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                    style={{ cursor: "pointer" }}
                  />
                }
                title={
                  <span style={{ color: "black", fontSize: "15px" }}>
                    Custom Title
                  </span>
                }
                description={
                  <span style={{ color: "black", fontSize: "12px" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minus eos voluptates, enim officiis tempore esse voluptatem!
                    Excepturi rem commodi tempora.
                  </span>
                }
              />
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              cover={
                <img
                  src="https://plus.unsplash.com/premium_photo-1708005566035-e8652b784a09?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image"
                />
              }
            >
              <Meta
                style={{ display: "flex", justifyContent: "center" }}
                avatar={
                  <Avatar
                    className="avatar"
                    src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                    style={{ cursor: "pointer" }}
                  />
                }
                title={
                  <span style={{ color: "black", fontSize: "15px" }}>
                    Custom Title
                  </span>
                }
                description={
                  <span style={{ color: "black", fontSize: "12px" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minus eos voluptates, enim officiis tempore esse voluptatem!
                    Excepturi rem commodi tempora.
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
                  src="https://plus.unsplash.com/premium_photo-1700575181289-b5248a43e7f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image"
                />
              }
            >
              <Meta
                style={{ display: "flex", justifyContent: "center" }}
                avatar={
                  <Avatar
                    className="avatar"
                    src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                    style={{ cursor: "pointer" }}
                  />
                }
                title={
                  <span style={{ color: "black", fontSize: "15px" }}>
                    Custom Title
                  </span>
                }
                description={
                  <span style={{ color: "black", fontSize: "12px" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minus eos voluptates, enim officiis tempore esse voluptatem!
                    Excepturi rem commodi tempora.
                  </span>
                }
              />
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              cover={
                <img
                  src="https://plus.unsplash.com/premium_photo-1663089989600-dd0e0ae03646?q=80&w=2117&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image"
                />
              }
            >
              <Meta
                style={{
                  display: "flex",
                  justifyContent: "center",
                  height: "116px",
                }}
                avatar={
                  <Avatar
                    className="avatar"
                    src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                    style={{ cursor: "pointer" }}
                  />
                }
                title={
                  <span style={{ color: "black", fontSize: "15px" }}>
                    Custom Title
                  </span>
                }
                description={
                  <span style={{ color: "black", fontSize: "12px" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minus eos voluptates, enim officiis tempore esse voluptatem!
                    Excepturi rem commodi tempora.
                  </span>
                }
              />
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              cover={
                <img
                  src="https://images.unsplash.com/photo-1703349770396-fd4cdd7c6914?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image"
                />
              }
            >
              <Meta
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
                avatar={
                  <Avatar
                    className="avatar"
                    src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                    style={{ cursor: "pointer" }}
                  />
                }
                title={
                  <span style={{ color: "black", fontSize: "15px" }}>???</span>
                }
                description={
                  <span style={{ color: "black", fontSize: "12px" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minus eos voluptates, enim officiis tempore esse voluptatem!
                    Excepturi rem commodi tempora.
                  </span>
                }
              />
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              cover={
                <img
                  src="https://images.unsplash.com/photo-1698815924393-c98ccaef778a?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image"
                />
              }
            >
              <Meta
                style={{
                  display: "flex",
                  justifyContent: "center",
                  height: "109px",
                }}
                avatar={
                  <Avatar
                    className="avatar"
                    src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                    style={{ cursor: "pointer" }}
                  />
                }
                title={
                  <span style={{ color: "black", fontSize: "15px" }}>
                    Custom Title
                  </span>
                }
                description={
                  <span style={{ color: "black", fontSize: "12px" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minus eos voluptates, enim officiis tempore esse voluptatem!
                    Excepturi rem commodi tempora.
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
                  src="https://plus.unsplash.com/premium_photo-1700315132341-bd6a65c10b19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image"
                />
              }
            >
              <Meta
                style={{ display: "flex", justifyContent: "center" }}
                avatar={
                  <Avatar
                    className="avatar"
                    src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                    style={{ cursor: "pointer" }}
                  />
                }
                title={
                  <span style={{ color: "black", fontSize: "15px" }}>
                    Custom Title
                  </span>
                }
                description={
                  <span style={{ color: "black", fontSize: "12px" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minus eos voluptates, enim officiis tempore esse voluptatem!
                    Excepturi rem commodi tempora.
                  </span>
                }
              />
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              cover={
                <img
                  src="https://images.unsplash.com/photo-1708375308203-33f92afe7cd5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image"
                />
              }
            >
              <Meta
                style={{ display: "flex", justifyContent: "center" }}
                avatar={
                  <Avatar
                    className="avatar"
                    src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                    style={{ cursor: "pointer" }}
                  />
                }
                title={
                  <span style={{ color: "black", fontSize: "15px" }}>
                    Custom Title
                  </span>
                }
                description={
                  <span style={{ color: "black", fontSize: "12px" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minus eos voluptates, enim officiis tempore esse voluptatem!
                    Excepturi rem commodi tempora.
                  </span>
                }
              />
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              cover={
                <img
                  src="https://images.unsplash.com/photo-1545968340-848cddd981ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image"
                />
              }
            >
              <Meta
                style={{ display: "flex", justifyContent: "center" }}
                avatar={
                  <Avatar
                    className="avatar"
                    src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                    style={{ cursor: "pointer" }}
                  />
                }
                title={
                  <span style={{ color: "black", fontSize: "15px" }}>
                    Custom Title
                  </span>
                }
                description={
                  <span style={{ color: "black", fontSize: "12px" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minus eos voluptates, enim officiis tempore esse voluptatem!
                    Excepturi rem commodi tempora.
                  </span>
                }
              />
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              cover={
                <img
                  src="https://images.unsplash.com/photo-1569388037243-dfa034ecdbca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image"
                />
              }
            >
              <Meta
                style={{ display: "flex", justifyContent: "center" }}
                avatar={
                  <Avatar
                    className="avatar"
                    src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                    style={{ cursor: "pointer" }}
                  />
                }
                title={
                  <span style={{ color: "black", fontSize: "15px" }}>
                    Custom Title
                  </span>
                }
                description={
                  <span style={{ color: "black", fontSize: "12px" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minus eos voluptates, enim officiis tempore esse voluptatem!
                    Excepturi rem commodi tempora.
                  </span>
                }
              />
            </Card>
          </Col>
        </Row>
        <div
          className="btnToOurHubContainer"
          style={{
            height: "300px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform: "translateY(-30px)",
          }}
        >
          <Button
            style={{ height: "60px", borderRadius: "30px", width: "400px" }}
          >
            <Typography.Text
              style={{ fontSize: "30px" }}
              onClick={handleBrowseMoreInspiration}
            >
              Browse more inspiration
            </Typography.Text>
          </Button>
        </div>
      </div>
      <div
        className="fourthSection"
        style={{
          height: "90vh",
          width: "100%",
          background: "#ffda79",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography.Title
          style={{
            fontSize: "70px",
            textAlign: "center",
          }}
        >
          Find your next <br /> designer today
        </Typography.Title>
        <Typography.Text style={{ fontSize: "20px", textAlign: "center" }}>
          The world’s leading brands use ArtHub to hire creative talent.
          <br />
          Browse millions of top-rated portfolios to find your perfect <br />
          creative match.
        </Typography.Text>
        <div className="fourSectionBtn">
          <div
            className="buttonContainer"
            style={{ display: "flex", gap: "20px", paddingTop: "30px" }}
          >
            <Button
              style={{
                height: "45px",
                borderRadius: "40px",
                width: "200px",
                backgroundColor: "black",
                color: "white",
                fontSize: "20px",
              }}
            >
              Get Started Now
            </Button>

            <Button
              style={{
                height: "45px",
                borderRadius: "40px",
                width: "200px",
                fontSize: "18px",
              }}
              onClick={handleLearnAboutHiring}
            >
              Learn About Hiring
            </Button>
          </div>
          <div
            className="button-to-findTalent"
            style={{
              paddingTop: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              gap: "50px",
            }}
          >
            {cookieValue ? (
              ""
            ) : (
              <Typography.Text style={{ fontSize: "20px" }}>
                Are You Designer ?
                <Button
                  onClick={() => {
                    navigate("/loginpage");
                  }}
                  className="btnJoinDribbble"
                >
                  Join ArtHub
                </Button>
              </Typography.Text>
            )}
          </div>
        </div>
      </div>
      <div className="fifthSection">
        <div className="logo-Slides">
          <img
            src="https://i.pinimg.com/564x/ea/dd/a3/eadda33f4baf6b79f3e41ee8a8d9327e.jpg"
            loading="lazy"
          />
          <img src="https://i.pinimg.com/564x/23/50/4e/23504ed890aa846557891b393ccdd65d.jpg" />
          <img src="https://i.pinimg.com/564x/b5/30/08/b53008f66bdaacf2fac8bd3c9e3ec364.jpg" />
          <img src="https://i.pinimg.com/564x/36/b6/7c/36b67ce844d8919d954d4f754b562e4e.jpg" />
          <img src="https://i.pinimg.com/564x/c8/b8/b0/c8b8b099505dc65f288dcf18090d4a64.jpg" />
          <img src="https://i.pinimg.com/564x/7f/83/fa/7f83fa427a0aac4de8a557c75bc753cc.jpg" />
          <img src="https://i.pinimg.com/564x/3d/85/21/3d85212f0b48a6203f7dd759f1964e07.jpg" />
          <img src="https://i.pinimg.com/564x/cd/32/12/cd3212a2c156350ba1fb74a533124198.jpg" />
          <img src="https://i.pinimg.com/564x/9a/f2/df/9af2df4f0cb2159c9f7d67d984f5d672.jpg" />
          <img src="https://i.pinimg.com/564x/39/04/0b/39040b29e84ed9e5c30559781aae4d9f.jpg" />
        </div>

        <div className="logo-Slides">
          <img
            src="https://i.pinimg.com/564x/ea/dd/a3/eadda33f4baf6b79f3e41ee8a8d9327e.jpg"
            loading="lazy"
          />
          <img src="https://i.pinimg.com/564x/23/50/4e/23504ed890aa846557891b393ccdd65d.jpg" />
          <img src="https://i.pinimg.com/564x/b5/30/08/b53008f66bdaacf2fac8bd3c9e3ec364.jpg" />
          <img src="https://i.pinimg.com/564x/36/b6/7c/36b67ce844d8919d954d4f754b562e4e.jpg" />
          <img src="https://i.pinimg.com/564x/c8/b8/b0/c8b8b099505dc65f288dcf18090d4a64.jpg" />
          <img src="https://i.pinimg.com/564x/7f/83/fa/7f83fa427a0aac4de8a557c75bc753cc.jpg" />
          <img src="https://i.pinimg.com/564x/3d/85/21/3d85212f0b48a6203f7dd759f1964e07.jpg" />
          <img src="https://i.pinimg.com/564x/cd/32/12/cd3212a2c156350ba1fb74a533124198.jpg" />
          <img src="https://i.pinimg.com/564x/9a/f2/df/9af2df4f0cb2159c9f7d67d984f5d672.jpg" />
          <img src="https://i.pinimg.com/564x/39/04/0b/39040b29e84ed9e5c30559781aae4d9f.jpg" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
