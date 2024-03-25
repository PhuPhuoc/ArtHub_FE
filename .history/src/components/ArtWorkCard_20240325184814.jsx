import {
  Card,
  Avatar,
} from "antd";
import React, { useEffect, useState } from "react";
import Meta from "antd/es/card/Meta";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
// eslint-disable-next-line react/prop-types
const ArtworkCard = (artwork) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [heartFilled, setHeartFilled] = useState(false);

  const handleHeartClick = () => {
    setHeartFilled(!heartFilled);
  };
  const handleArtworkClick = (title, description, image) => {
    setModalContent({ title, description, image });
    setModalVisible(true);
  };

  return (
      <div style={{ padding: 10 }}>
    <Card
      cover={<img src={artwork.image} alt={artwork.title}/>}
      onClick={() => handleArtworkClick(artwork.title, artwork.description, artwork.image)}
      style={{ width: 350 }}
    >
      <Meta
        avatar={
          <Avatar
            src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
            style={{ cursor: "pointer" }}
            
          />
        }
        title={<span style={{ color: "black", fontSize: "15px", borderBottom: "1px solid black" }}>{artwork.title}</span>}
        description={<span style={{ color: "black", fontSize: "12px" }}>{artwork.description}</span>}
      />
      <button style={{ position: 'absolute', right: "10px", bottom: "10px", alignItems: 'center', border: 'none', outline: 'none', transition: 'none', boxShadow: 'none' }} onClick={handleHeartClick}>
        {heartFilled ? <HeartFilled style={{ color: 'red', fontSize: '24px' }} /> : <HeartOutlined style={{ color: 'red', fontSize: '24px' }} />}
      </button>
    </Card>
      </div>
  );
};

export default ArtworkCard;