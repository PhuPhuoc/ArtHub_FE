import { Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArtworkSold } from "../../redux/slices/artworkSlice";
import Cookies from "js-cookie";
import {
  getArtworkSoldSelector,
  getSingleUserSelector,
} from "../../redux/selector";
import { getUser } from "../../redux/slices/userSlice";

const ArtworkPurchaseHistoryPage = () => {
  const dispatch = useDispatch();
  const userId = Cookies.get("sessionCookie");
  const artworkSold = useSelector(getArtworkSoldSelector);
  const getSingleUser = useSelector(getSingleUserSelector);
  const [currentTextColor, setCurrentTextColor] = useState("green");
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
    dispatch(getUser(userId));
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
  console.log(getSingleUser);
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
          {getSingleUser[0]?.balance ? ` $ ${getSingleUser[0]?.balance}` : ""}
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
