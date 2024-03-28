import { Flex, Typography } from "antd";
import React from "react";

const OrderPurchased = () => {
  return (
    <div style={{ minHeight: "100vh", width: "100%" }}>
      <div
        className="title"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Typography.Title style={{ fontSize: "60px", fontWeight: "800" }}>
          Your Purchased Item Here
        </Typography.Title>
      </div>
      <div
        className="text"
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography.Text style={{ fontSize: "30px" }}>
          Your Item Can Not Be Bought Again.
          <br /> You Can Download it from here !
        </Typography.Text>
      </div>
    </div>
  );
};
export default OrderPurchased;
