import { Button, Carousel, Typography, Col, Row, Card, Avatar } from "antd";
import Meta from "antd/es/card/Meta";
import bird from "../../assets/images/bird.jpg";
import "./HomePage.css";
import ReactPlayer from "react-player";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [buttonColor, setButtonColor] = useState("palevioletred");
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newColor = getRandomColor();
      setButtonColor(newColor);
    }, 1500);
    return () => clearInterval(intervalId);
  }, []);
  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  return (
    <div className="home">
      <div
        className="first-button"
        style={{
          height: "200px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform: "translateY(30px)",
        }}
      >
        <Button
          style={{
            height: "60px",
            borderRadius: "40px",
            width: "420px",
            backgroundColor: buttonColor,
            transition: "background-color 0.5s ease",
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
          }}
        >
          Get inspired by the work of millions of top-rated designers & agencies
          around the world.
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
          >
            Get Started
          </Button>
        </div>
      </div>
      <div className="firstSection" style={{ overflow: "hidden" }}>
        <Carousel autoplay autoplaySpeed={3000}>
          <div>
            <img
              src={bird}
              alt="Image 1"
              style={{ width: "100%", height: "90vh", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src={bird}
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
              src={bird}
              alt="Image 3"
              style={{ width: "100%", height: "90vh", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src={bird}
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
            <Card cover={<img src={bird} alt="image" />}>
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
            <Card cover={<img src={bird} alt="image" />}>
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
            <Card cover={<img src={bird} alt="image" />}>
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
            <Card cover={<img src={bird} alt="image" />}>
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
            <Card cover={<img src={bird} alt="image" />}>
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
            <Card cover={<img src={bird} alt="image" />}>
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
            <Card cover={<img src={bird} alt="image" />}>
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
            <Card cover={<img src={bird} alt="image" />}>
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
            <Card cover={<img src={bird} alt="image" />}>
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
            <Card cover={<img src={bird} alt="image" />}>
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
            <Card cover={<img src={bird} alt="image" />}>
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
            <Card cover={<img src={bird} alt="image" />}>
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
            <Card cover={<img src={bird} alt="image" />}>
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
            <Card cover={<img src={bird} alt="image" />}>
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
            <Card cover={<img src={bird} alt="image" />}>
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
            <Card cover={<img src={bird} alt="image" />}>
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
            <Card cover={<img src={bird} alt="image" />}>
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
            <Card cover={<img src={bird} alt="image" />}>
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
            <Card cover={<img src={bird} alt="image" />}>
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
            <Card cover={<img src={bird} alt="image" />}>
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
            <Card cover={<img src={bird} alt="image" />}>
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
            <Card cover={<img src={bird} alt="image" />}>
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
            <Card cover={<img src={bird} alt="image" />}>
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
            <Card cover={<img src={bird} alt="image" />}>
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
            <Typography.Text style={{ fontSize: "30px" }}>
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
          The world’s leading brands use Dribbble to hire creative talent.
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
            <Typography.Text style={{ fontSize: "20px" }}>
              Are You Designer ?
              <Button className="btnJoinDribbble">Join Dribbble</Button>
            </Typography.Text>
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
