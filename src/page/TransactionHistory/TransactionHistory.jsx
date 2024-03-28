import { Table, Typography } from "antd";
import React from "react";

const TransactionHistory = () => {
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
      title: "Creator Name",
      dataIndex: "creatorName",
      key: "creatorName",
    },
    {
      title: "Date Purchase",
      dataIndex: "datePurchase",
      key: "datePurchase",
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
  return (
    <div style={{ minHeight: "100vh", width: "100%" }}>
      <div className="title">
        <Typography.Title style={{ fontSize: "50px", fontWeight: "800" }}>
          History Of Transactions
        </Typography.Title>
      </div>
      <div className="historyTransactionTab">
        <Table columns={columns} />
      </div>
    </div>
  );
};
export default TransactionHistory;
