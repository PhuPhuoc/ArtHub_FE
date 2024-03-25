import { Table, Typography } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArtworkSold } from "../../redux/slices/artworkSlice";
import Cookies from "js-cookie";
import { getArtworkSoldSelector } from "../../redux/selector";

const ArtworkPurchaseHistoryPage = () => {
  const dispatch = useDispatch();
  const userId = Cookies.get("sessionCookie");
  const artworkSold = useSelector(getArtworkSoldSelector);
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
  return (
    <div style={{ minHeight: "100vh", width: "100%" }}>
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
