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
    }, 5000);
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
      <div className="firstSection">
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
    </div>
  );
};

export default HomePage;
