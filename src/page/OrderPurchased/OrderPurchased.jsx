import { Button, Flex, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { getArtworkHistorySelector } from "../../redux/selector";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { getArtworkHistory } from "../../redux/slices/artworkSlice";
import { useNavigate } from "react-router-dom";

const OrderPurchased = () => {
  const [currentColor, setCurrentColor] = useState("#FF5733");
  const [currentTextColor, setCurrentTextColor] = useState("#FFFFFF");
  const dispatch = useDispatch();
  const userId = Cookies.get("sessionCookie");
  const artWorkHistory = useSelector(getArtworkHistorySelector);
  const [hasData, setHasData] = useState(false);
  const navigate = useNavigate();
  const columns = [
    {
      title: "Creator name",
      dataIndex: "creator",
      key: "creator",
    },
    {
      title: "Artwork name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `$${price}`,
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (record) => {
        return <img src={record} style={{ height: "150px", width: "120px" }} />;
      },
    },
    {
      render: (record) => (
        <Button style={{ color: "blue" }}>Download Image</Button>
      ),
    },
  ];
  useEffect(() => {
    dispatch(getArtworkHistory(userId));
  }, [userId]);

  useEffect(() => {
    if (artWorkHistory && artWorkHistory.length > 0) {
      setHasData(true);
    } else {
      setHasData(false);
    }
  }, [artWorkHistory]);

  useEffect(() => {
    const changeColor = () => {
      const colors = [
        "#FF5733",
        "#33FF57",
        "#5733FF",
        "#AE675E",
        "#BFC54D",
        "#3EBC50",
      ];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setCurrentColor(randomColor);
    };

    const changeTextColor = () => {
      const textColors = ["#FFFFFF", "#000000"];
      const randomTextColor =
        textColors[Math.floor(Math.random() * textColors.length)];
      setCurrentTextColor(randomTextColor);
    };

    const intervalId = setInterval(() => {
      changeColor();
      changeTextColor();
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  const clickToBuyItem = () => {
    navigate("/ourhub");
  };
  return (
    <div style={{ minHeight: "100vh", width: "100%" }}>
      {!hasData && (
        <>
          <div
            className="title"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Typography.Title style={{ fontSize: "40px", fontWeight: "800" }}>
              Stuff you buy, or subscription you pay for, will show up here.
            </Typography.Title>
          </div>
          <div
            className="imageBackground"
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <img
              style={{ height: "400px" }}
              src="https://cdn2.vectorstock.com/i/1000x1000/58/61/man-with-shopping-cart-flat-cartoon-boy-buying-vector-29765861.jpg"
            />
          </div>
          <div
            className="subTitle"
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Typography.Title>
              Not Seeing Orders here ? Why not buy one ?
            </Typography.Title>
          </div>
          <div
            className="button"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              background: "transparent",
              border: "transparent",
            }}
          >
            <Button
              style={{
                marginTop: "20px",
                height: "50px",
                width: "300px",
                fontSize: "20px",
                backgroundColor: currentColor,
                color: currentTextColor,
              }}
              onClick={clickToBuyItem}
            >
              Click Here to Buy Item ?
            </Button>
          </div>
        </>
      )}

      {hasData && (
        <>
          <div
            className="titleTable"
            style={{ width: "100%", justifyContent: "center", display: "flex" }}
          >
            <Typography.Title>Your Item Store Here</Typography.Title>
          </div>
          <Table
            columns={columns}
            dataSource={artWorkHistory?.map((item) => {
              return {
                creator: item?.creator,
                title: item?.title,
                price: item?.price,
                image: item?.image,
              };
            })}
          />
        </>
      )}
    </div>
  );
};
export default OrderPurchased;
