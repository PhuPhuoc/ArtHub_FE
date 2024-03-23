// ArtWorkCard.js

import React from "react";
import { Card, Avatar } from "antd";
import PropTypes from "prop-types";

const { Meta } = Card;

const ArtWorkCard = ({ item, onClick }) => {
  return (
    <Card
      onClick={onClick}
      cover={<img src={item.image} alt="image" />}
    >
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
    </Card>
  );
};

ArtWorkCard.propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ArtWorkCard;