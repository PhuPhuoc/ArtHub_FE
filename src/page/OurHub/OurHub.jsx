<<<<<<< Updated upstream
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
import React from "react";
import { CiSearch } from "react-icons/ci";
import "./OurHub.css";
import Meta from "antd/es/card/Meta";
import bird from "../../assets/images/bird.jpg";
=======
import React, { useState } from 'react';
import bird from '../../assets/images/bird.jpg';
import './OurHub.css';

// Define a new Card component
const Card = ({ title, content }) => {
  return (
    <div className="card">
          <img src={content} alt="Bird" />
        </div>
  );
};

const TextContainer = () => {
  return (
    <div className="text__container__1">
      <h1>Our Hub</h1>
      <p>
        Welcome to Our Hub! Here you can find the latest news, updates, and
        events from our community.
      </p>
    </div>
  );
};

const SearchBar = ({ searchText, setSearchText, handleSearch }) => {
  return (
    <div className="search__container">
      <input
        className="search__input"
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

const Filters = ({ activeFilters, handleFilterChange, handleRemoveFilter }) => {
  return (
    <div className="filter__container">
      {['filter 1', 'filter 2', 'filter 3', 'filter 4', 'filter 5', 'filter 6 ', 'filter 7', 'filter 8'].map((filter) => (
        <button
          key={filter}
          className={`filter__button ${activeFilters.includes(filter) && 'active'}`}
          onClick={() => handleFilterChange(filter)}
        >
          {filter}
          {activeFilters.includes(filter) && (
            <span className="remove__filter" onClick={() => handleRemoveFilter(filter)}>
              
            </span>
          )}
        </button>
      ))}
    </div>
  );
};
>>>>>>> Stashed changes

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
  const [justify, setJustify] = React.useState(justifyOptions[0]);
  const renderImages = () => {
    switch (justify) {
      case "Discover":
        return (
          <div className="imagesContain">
            <div className="title">Images for Discovers</div>
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <Card
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
                      src="https://images.unsplash.com/photo-1605552666921-bd313f851541?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                        Viet Nam Street
                      </span>
                    }
                    description={
                      <span style={{ color: "black", fontSize: "12px" }}>
                        It is a super cool VietNam Street
                      </span>
                    }
                  />
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card
                  cover={
                    <img
                      src="https://plus.unsplash.com/premium_photo-1661371927364-e3aec9079c66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                        Japan Street
                      </span>
                    }
                    description={
                      <span style={{ color: "black", fontSize: "12px" }}>
                        It is just a japan street
                      </span>
                    }
                  />
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card
                  cover={
                    <img
                      src="https://images.unsplash.com/photo-1463592177119-bab2a00f3ccb?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                        India dancing
                      </span>
                    }
                    description={
                      <span style={{ color: "black", fontSize: "12px" }}>
                        It is a india dancing
                      </span>
                    }
                  />
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card
                  cover={
                    <img
                      src="https://images.unsplash.com/photo-1517309230475-6736d926b979?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                        China Street
                      </span>
                    }
                    description={
                      <span style={{ color: "black", fontSize: "12px" }}>
                        Its a china Street
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
                      src="https://images.unsplash.com/photo-1682826556364-adb438cf8e3d?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                        Thai Land Pagoda
                      </span>
                    }
                    description={
                      <span style={{ color: "black", fontSize: "12px" }}>
                        It is just a ThaiLand Pagoda with 4 men
                      </span>
                    }
                  />
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card
                  cover={
                    <img
                      src="https://images.unsplash.com/photo-1509384088852-1edd58d93617?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                        British Soldier
                      </span>
                    }
                    description={
                      <span style={{ color: "black", fontSize: "12px" }}>
                        This is a cool British Soldier
                      </span>
                    }
                  />
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card
                  cover={
                    <img
                      src="https://plus.unsplash.com/premium_photo-1664303467567-17891a27998a?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                        Egypt Pyramid
                      </span>
                    }
                    description={
                      <span style={{ color: "black", fontSize: "12px" }}>
                        This is a beautiful view of the Pyramid
                      </span>
                    }
                  />
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card
                  cover={
                    <img
                      src="https://images.unsplash.com/photo-1487546331507-fcf8a5d27ab3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                        African people
                      </span>
                    }
                    description={
                      <span style={{ color: "black", fontSize: "12px" }}>
                        This is a beatiful moment of the African woman with her
                        child
                      </span>
                    }
                  />
                </Card>
              </Col>
            </Row>
          </div>
        );
      case "Technology":
        // Implement logic to render images for Animation
        return (
          <div className="imagesContain">
            <div className="title">Images for Technologies</div>
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <Card
                  cover={
                    <img
                      src="https://images.unsplash.com/photo-1596558450255-7c0b7be9d56a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                      src="https://images.unsplash.com/photo-1557690267-fad2f168bb95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                      src="https://images.unsplash.com/photo-1551817958-20204d6ab212?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                      src="https://images.unsplash.com/photo-1615494488092-b13b68fe0eb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                      src="https://images.unsplash.com/photo-1575571536958-38aa1227786a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                      src="https://images.unsplash.com/photo-1551818014-fa14764bc121?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                      src="https://images.unsplash.com/photo-1616016048007-9315ac44c696?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                      src="https://images.unsplash.com/photo-1524656855800-59465ebcec69?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

      default:
        return <div>No images found</div>;
    }
  };
  return (
<<<<<<< Updated upstream
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
=======
    <div>
      <SearchBar searchText={searchText} setSearchText={setSearchText} handleSearch={handleSearch} />
      <TextContainer />
      <Filters
        activeFilters={activeFilters}
        handleFilterChange={handleFilterChange}
        handleRemoveFilter={handleRemoveFilter}
      />

      {/* Rendering cards */}
      <div className="cards__container">
        {/* Assuming card data is provided as an array */}
        {[
          { title: 'Card 1', content: bird},
          { title: 'Card 2', content: bird},
          { title: 'Card 3', content: bird},
          { title: 'Card 4', content: bird},
          { title: 'Card 5', content: bird},
          { title: 'Card 6', content: bird},
          { title: 'Card 7', content: bird},
          { title: 'Card 8', content: bird},
          { title: 'Card 9', content: bird},
        ].map((card, index) => (
          <Card key={index} title={card.title} content={card.content}/>
        ))}
>>>>>>> Stashed changes
      </div>
    </div>
  );
};

export default OurHub;
