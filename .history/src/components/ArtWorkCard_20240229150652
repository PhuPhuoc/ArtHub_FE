
const ArtworkCard = ({ title, description, image, onHeartClick, heartFilled }) => {
  return (
    <Card
      cover={<img src={image} alt={title} />}
      onClick={() => handleArtworkClick(title, description, image)}
    >
      <Meta
        avatar={
          <Avatar
            src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
            style={{ cursor: "pointer" }}
          />
        }
        title={<span style={{ color: "black", fontSize: "15px", borderBottom: "1px solid black" }}>{title}</span>}
        description={<span style={{ color: "black", fontSize: "12px" }}>{description}</span>}
      />
      <button style={{ position: 'absolute', right: "10px", bottom: "10px", alignItems: 'center', border: 'none', outline: 'none', transition: 'none', boxShadow: 'none' }} onClick={onHeartClick}>
        {heartFilled ? <HeartFilled style={{ color: 'red', fontSize: '24px' }} /> : <HeartOutlined style={{ color: 'red', fontSize: '24px' }} />}
      </button>
    </Card>
  );
};

export default ArtworkCard;