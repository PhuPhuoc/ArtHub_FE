// ArtWorkCard.js

import React from "react";
import { Card, Avatar } from "antd";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

const { Meta } = Card;

const ArtWorkCard = ({ item, onClick, heartFilled, likes, onHeartClick }) => {
  return (
    <Card onClick={onClick} cover={<img src={item.image} alt="image" />}>
      <Meta
        avatar={
          <Avatar
            className="avatar"
            src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
            style={{ cursor: "pointer" }}
          />
        }
        title={<span>{item.title}</span>}
        description={<span>{item.description}</span>}
      />
      <button
        style={{
          position: "absolute",
          right: "10px",
          bottom: "10px",
          border: "none",
          background: "transparent",
          cursor: "pointer",
        }}
        onClick={onHeartClick}
      >
        {heartFilled ? (
          <HeartFilled style={{ color: "red", fontSize: "24px" }} />
        ) : (
          <HeartOutlined style={{ color: "red", fontSize: "24px" }} />
        )}
        {likes ? likes : "0"}
      </button>
    </Card>
  );
};

ArtWorkCard.propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  heartFilled: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onHeartClick: PropTypes.func.isRequired,
};

export default ArtWorkCard;
