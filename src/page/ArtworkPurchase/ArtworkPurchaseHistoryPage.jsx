import { Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArtworkSold } from "../../redux/slices/artworkSlice";
import Cookies from "js-cookie";
import { getArtworkSoldSelector } from "../../redux/selector";

const ArtworkPurchaseHistoryPage = () => {
  const dispatch = useDispatch();
  const userId = Cookies.get("sessionCookie");
  const artworkSold = useSelector(getArtworkSoldSelector);
  const [currentTextColor, setCurrentTextColor] = useState("green");
  const [balance, setBalance] = useState(0);
  const columns = [
    {
      title: "User Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Artwork name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Type Design",
      dataIndex: "typeDesign",
      key: "typeDesign",
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
  ];
  useEffect(() => {
    dispatch(getArtworkSold(userId));
  }, [userId]);

  useEffect(() => {
    const interval = setInterval(() => {
      const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "cyan",
      ];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setCurrentTextColor(randomColor);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // balance
  /* useEffect(() => {
    // Tính tổng balance dựa trên giá của các item
    const initialBalance = artworkSold.reduce((accumulator, current) => {
      return current.artwork.price + accumulator;
    }, 0);
    setBalance(initialBalance);
  }, [artworkSold]); */

  useEffect(() => {
    // Tính tổng balance dựa trên giá của các item
    const initialBalance = artworkSold.reduce((accumulator, current) => {
      // Convert the price to a number using parseFloat or parseInt
      const price = parseFloat(current.artwork.price);
      // Add the price to the accumulator
      return price + accumulator;
    }, 0);
    const balance = initialBalance.toLocaleString();
    setBalance(initialBalance);
  }, [artworkSold]);
  return (
    <div style={{ minHeight: "100vh", width: "100%" }}>
      <div
        className="titleBalance"
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Typography.Title style={{ fontSize: "70px", fontWeight: "800" }}>
          Your Current Balance
        </Typography.Title>
      </div>
      <div
        className="numberBalance"
        style={{
          height: "50vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography.Title
          style={{ fontSize: "120px", color: currentTextColor }}
        >
          ${parseInt(balance)}
        </Typography.Title>
      </div>
      <div className="titleHistory">
        <Typography.Title style={{ fontSize: "100px" }}>
          History
        </Typography.Title>
      </div>
      <div className="historyOrderTable">
        <Table
          columns={columns}
          dataSource={artworkSold?.map((item) => {
            return {
              _id: item?._id,
              title: item?.artwork?.title,
              description: item?.artwork?.description,
              price: item?.artwork?.price,
              typeDesign: item?.artwork?.typeDesign,
              image: item?.artwork?.image,
              likes: item?.artwork?.likes,
              creatorName: item?.user?.name,
              creatorEmail: item?.user?.email,
              buyerName: item?.buyer?.name,
              buyerEmail: item?.buyer?.email,
              name: item?.user?.name,
              email: item?.user?.email,
              artworkId: item?.artworkId,
              userId: item?.userId,
            };
          })}
        />
      </div>
    </div>
  );
};
export default ArtworkPurchaseHistoryPage;
