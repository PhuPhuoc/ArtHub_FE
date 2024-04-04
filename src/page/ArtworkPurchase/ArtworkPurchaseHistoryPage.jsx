import { Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllTransaction,
  getArtworkSold,
} from "../../redux/slices/artworkSlice";
import Cookies from "js-cookie";
import {
  getAllTransactionSelector,
  getArtworkSoldSelector,
  getSingleUserSelector,
} from "../../redux/selector";
import { getUser } from "../../redux/slices/userSlice";

const ArtworkPurchaseHistoryPage = () => {
  const dispatch = useDispatch();
  const userId = Cookies.get("sessionCookie");
  const adminState = sessionStorage.getItem("admin");
  const artworkSold = useSelector(getArtworkSoldSelector);
  const allTransaction = useSelector(getAllTransactionSelector);
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
  console.log("admin", adminState);
  useEffect(() => {
    if (adminState === "true") {
      dispatch(getAllTransaction());
    } else {
      dispatch(getArtworkSold(userId));
    }

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
          {Math.round(getSingleUser[0]?.balance)
            ? ` $ ${Math.round(getSingleUser[0]?.balance)}`
            : ""}
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
          // dataSource={artworkSold?.map((item) => {
          //   return {
          //     _id: item?._id,
          //     title: item?.artwork?.title,
          //     description: item?.artwork?.description,
          //     price: item?.artwork?.price,
          //     typeDesign: item?.artwork?.typeDesign,
          //     image: item?.artwork?.image,
          //     likes: item?.artwork?.likes,
          //     name: item?.user?.name,
          //     email: item?.user?.email,
          //     artworkId: item?.artworkId,
          //     userId: item?.userId,
          //   };
          // })}
          dataSource={
            adminState === "true"
              ? allTransaction?.map((item) => {
                  return {
                    _id: item?._id,
                    title: item?.artwork?.title,
                    description: item?.artwork?.description,
                    price: item?.artwork?.price,
                    typeDesign: item?.artwork?.typeDesign,
                    image: item?.artwork?.image,
                    likes: item?.artwork?.likes,
                    name: item?.creator?.name,
                    email: item?.creator?.email,
                    artworkId: item?.artworkId,
                    userId: item?.userId,
                  };
                })
              : artworkSold?.map((item) => {
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
                })
          }
        />
      </div>
    </div>
  );
};
export default ArtworkPurchaseHistoryPage;
