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
  Avatar,
} from "antd";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import "./OurHub.css";
import Meta from "antd/es/card/Meta";
import bird from "../../assets/images/bird.jpg";
import { Modal } from "antd";
import {ShoppingCartOutlined, HeartOutlined, HeartFilled, SendOutlined} from "@ant-design/icons";


const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);
const OurHub = () => {
  const justifyOptions = [
    "Discover",
    "Animation",
    "Culture",
    "Technology",
    "Food",
  ];


  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalContent, setModalContent] = React.useState({});
  const [heartFilled, setHeartFilled] = useState(false);

  const Comment = ({ user, text }) => (
    <div style={{ marginBottom: "10px" }}>
      <span style={{ fontWeight: "bold" }}>{user}:</span> {text}
    </div>
  );
  

  const handleHeartClick = () => {
    setHeartFilled(!heartFilled);
  };
  const [justify, setJustify] = React.useState(justifyOptions[0]);
  const renderImages = () => {
        
    const handleArtworkClick = (title, description, image) => {
      setModalContent({ title, description, image });
      setModalVisible(true);
    };
    switch (justify) {
      case "Discover":
        return (
          <div className="imagesContain">
            <div className="title">Images for Discovers</div>
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <Card
                  onClick={() =>
                    handleArtworkClick(
                      "Landmark 81 Ho Chi Minh City",
                      "This is the second highest building in southeast Asia",
                      "https://images.unsplash.com/photo-1549654917-9ddb6fed998f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    )
                  }
                  cover={
                    <img
                      src="https://images.unsplash.com/photo-1549654917-9ddb6fed998f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                        Landmark 81 Ho Chi Minh City
                      </span>
                    }
                    description={
                      <span style={{ color: "black", fontSize: "12px" }}>
                        This is the second highest building in southeast Asia
                      </span>
                    }
                  />
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card
                  cover={
                    <img
                      src="https://images.unsplash.com/photo-1508804052814-cd3ba865a116?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                        Great Wall China
                      </span>
                    }
                    description={
                      <span style={{ color: "black", fontSize: "12px" }}>
                        This is one of the world heritage site of China
                      </span>
                    }
                  />
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card
                  cover={
                    <img
                      src="https://images.unsplash.com/photo-1484923720570-4bc210954735?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                        Disneyland
                      </span>
                    }
                    description={
                      <span style={{ color: "black", fontSize: "12px" }}>
                        Disneyland Resort theme park located in Paris
                      </span>
                    }
                  />
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card
                  cover={
                    <img
                      src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                        Eifel Tower
                      </span>
                    }
                    description={
                      <span style={{ color: "black", fontSize: "12px" }}>
                        This is a wrought-iron lattice tower on the Champ de
                        Mars in Paris, France.
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
                      src="https://images.unsplash.com/photo-1565475783696-96001eff1b45?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                        The statue of liberty
                      </span>
                    }
                    description={
                      <span style={{ color: "black", fontSize: "12px" }}>
                        The Statue of Liberty is a colossal neoclassical
                        sculpture on Liberty Island in New York Harbor in New
                        York City, United States.
                      </span>
                    }
                  />
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card
                  cover={
                    <img
                      src="https://images.unsplash.com/photo-1621453728762-5a95731038d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                        Marina Bay Sands
                      </span>
                    }
                    description={
                      <span style={{ color: "black", fontSize: "12px" }}>
                        Marina Bay Sands is an integrated resort fronting Marina
                        Bay in Singapore and a landmark of the city
                      </span>
                    }
                  />
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card
                  cover={
                    <img
                      src="https://images.unsplash.com/photo-1508952817440-fefa6a425539?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                        The Pizza Tower
                      </span>
                    }
                    description={
                      <span style={{ color: "black", fontSize: "12px" }}>
                        The Leaning Tower of Pisa, or simply the Tower of Pisa,
                        is the campanile, or freestanding bell tower, of Pisa
                        Cathedral
                      </span>
                    }
                  />
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card
                  cover={
                    <img
                      src="https://images.unsplash.com/photo-1609237756221-88c4a93846b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                        Neuschwanstein Castle
                      </span>
                    }
                    description={
                      <span style={{ color: "black", fontSize: "12px" }}>
                        Neuschwanstein Castle is a 19th-century historicist
                        palace on a rugged hill of the foothills of the Alps in
                        the very south of Germany, close to border with Austria.
                      </span>
                    }
                  />
                </Card>
              </Col>
            </Row>
            <Modal
  title={null}
  visible={modalVisible}
  onCancel={() => setModalVisible(false)}
  footer={null}
  style={{ top: 20, minWidth: "80%", maxWidth: "80%", bottom:20 }} // Adjust width here
>
  <Row>
    <Col span={12}>
      <img
        src={modalContent.image}
        alt={modalContent.title}
        style={{ width: "100%", height: "100%", paddingRight: "20px" }}
      />
    </Col>
    <Col span={12} style={{ paddingLeft: "20px" }}>
      <h2 style={{ fontSize: "200%", fontFamily: "serif", fontWeight: "bold", paddingBottom: "10px" }}>{modalContent.title}</h2>
      <p style={{ fontSize: "130%", paddingBottom: "10px"}}>{modalContent.description}</p>
      <p style={{ fontSize: "130%",paddingBottom: "10px" }}>100 x 100 cm</p>
      <p style={{ fontSize: "130%",paddingBottom: "250px", fontStyle:"italic" }}>10.99$</p>
      <Row style={{paddingLeft:"10px"}}>
        <Avatar
          className="avatar"
          src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
          style={{ cursor: "pointer", width:"10%", height:"10%" }}
        />
        <p style={{paddingLeft:"10px", marginTop:"10px", fontSize:"120%"}}>Jean Paul</p>
        <button style={{position: 'absolute', right: "180px",bottom:"45px", alignItems: 'center', border: 'none', outline: 'none', transition: 'none', boxShadow:'none'}} onClick={handleHeartClick}>
          {heartFilled ? <HeartFilled style={{color: 'red',fontSize: '24px'}} /> : <HeartOutlined style={{color: 'red', fontSize: '24px'}} />}
        </button>
        <Button id='hearthButton' style={{position: 'absolute', right: 10, alignItems: 'center', }}>Add to cart <ShoppingCartOutlined style={{alignItems: 'center'}}/> </Button>
      </Row>
    </Col>
  </Row>

  {/* Comment Section */}
  <Row style={{ paddingTop: "20px" }}>
    <Col span={24}>
      <h3 style={{ fontSize: "150%", fontWeight: "bold", paddingBottom: "10px" }}>Comments</h3>
      {/* Comment section JSX */}
      <div style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "10px", height: "250px", overflowY: "auto" }}>
        {/* Individual comments */}
        <Comment user="User1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <Comment user="User2" text="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <Comment user="User3" text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        <Comment user="User4" text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
        <Comment user="User5" text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        <Comment user="User6" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <Comment user="User7" text="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <Comment user="User8" text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        <Comment user="User9" text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
        <Comment user="User10" text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      </div>
      <div style={{ marginTop: "20px" }}>
        <Input placeholder="Add a comment" />
        <button style={{left:10}}>
          <SendOutlined />
        </button>
        
      </div>
    </Col>
  </Row>
</Modal>


          </div>
        );

      case "Animation":
        return (
          <div className="imagesContain">
            <div className="title">Images for Animations</div>
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <Card
                  cover={
                    <img
                      src="https://images.unsplash.com/photo-1439436556258-1f7fab1bfd4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                      src="https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                      src="https://images.unsplash.com/photo-1600242035009-ac25152afbb0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                      src="https://images.unsplash.com/photo-1634689033402-a132c62b310e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                      src="https://images.unsplash.com/photo-1533234427049-9e9bb093186d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                      src="https://images.unsplash.com/photo-1613750651512-d65ce96dff55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                      src="https://images.unsplash.com/photo-1570805140270-9d3ce9325319?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                      src="https://images.unsplash.com/photo-1453974336165-b5c58464f1ed?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

      case "Culture":
        return (
          <div className="imagesContain">
            <div className="title">Images for Cultures</div>
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <Card
                  cover={
                    <img
                      src="https://images.unsplash.com/photo-1609952917837-2394b5a4d2fb?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                        Ao Dai Viet Nam
                      </span>
                    }
                    description={
                      <span style={{ color: "black", fontSize: "12px" }}>
                        The iPhone 15 Pro and iPhone 15 Pro Max are smartphones
                        designed, developed, and marketed by Apple Inc
                      </span>
                    }
                  />
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card
                  cover={
                    <img
                      src="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                        Sakura Japan Trees
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
                      src="https://plus.unsplash.com/premium_photo-1698279879963-a59b3c84f56e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                      <span
                        style={{
                          color: "black",
                          fontSize: "15px",
                          borderBottom: "1px solid black",
                        }}
                      >
                        The festival of the died
                      </span>
                    }
                    description={
                      <span
                        style={{
                          color: "black",
                          fontSize: "12px",
                          height: "100px",
                        }}
                      >
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
                      src="https://i2.wp.com/www.tixup.com/medias/static/uploads/2017/06/La-f%C3%AAte-de-la-musique-Tous-%C3%A0-Toulouse-en-direct-sur-France-2-et-France-T%C3%A9l%C3%A9visions.jpg?fit=1200%2C768"
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
                        fête de la musique française
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
                      src="https://plus.unsplash.com/premium_photo-1673611878649-ca56724a2119?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                        A Dragon handmade
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
                      src="https://images.unsplash.com/photo-1543906965-f9520aa2ed8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                        Colorful かさ
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
                      src="https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                        Hands with tatoo
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
                      src="https://images.unsplash.com/photo-1488861859915-4b5a5e57649f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                        India Festival
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
      case "Technology":
        return (
          <div className="imagesContain">
            <div className="title">Images for Techonologies</div>
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <Card
                  cover={
                    <img
                      src="https://images.unsplash.com/photo-1589798312995-8428138bb1ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                        Iphone 15 Pro Max
                      </span>
                    }
                    description={
                      <span style={{ color: "black", fontSize: "12px" }}>
                        The iPhone 15 Pro and iPhone 15 Pro Max are smartphones
                        designed, developed, and marketed by Apple Inc
                      </span>
                    }
                  />
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card
                  cover={
                    <img
                      src="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                        Apple Watch
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
                      src="https://plus.unsplash.com/premium_photo-1681286767876-5260ad9eff9c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                      <span
                        style={{
                          color: "black",
                          fontSize: "15px",
                          borderBottom: "1px solid black",
                        }}
                      >
                        Ipad
                      </span>
                    }
                    description={
                      <span
                        style={{
                          color: "black",
                          fontSize: "12px",
                          height: "100px",
                        }}
                      >
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
                      src="https://plus.unsplash.com/premium_photo-1663091701962-2ae72a2ad2ac?q=80&w=2087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                        Visual Reality Headset
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
                      src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                        PlayStation 5
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
                      src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                        A Beatiful Computer Design
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
                      src="https://images.unsplash.com/photo-1525338078858-d762b5e32f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                        The development of AI Robot
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
                      src="https://images.unsplash.com/photo-1553260188-75a8d6205b6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                        New model of electric car
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

      case "Food":
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

      default:
        return <div>No images found</div>;
    }
  };
  return (
    <div className="OurHubPage">
      <div className="firstSection" style={{ height: "60vh", width: "100%" }}>
        <div className="mainTitle">
          <Typography.Title
            style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              fontSize: "70px",
              fontWeight: "900",
            }}
          >
            Discover the world’s top
            <br />
            designers & creatives
          </Typography.Title>
          <Typography.Text
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              fontSize: "20px",
              color: "gray",
              marginTop: "40px",
            }}
          >
            Dribbble is the leading destination to find & showcase creative work{" "}
            <br />
            and home to the world's best design professionals.
          </Typography.Text>
        </div>
        <div
          className="searchBox"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "60px",
            height: "100px",
          }}
        >
          <Space direction="vertical">
            <Search
              className="searchBar"
              icon={CiSearch}
              placeholder="Search anything you want !"
              size="large"
              onSearch={onSearch}
              style={{
                width: "800px",
                fontSize: "30px",
                padding: "10px",
              }}
            />
          </Space>
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
      </div>
    </div>
  );
};

export default OurHub;
