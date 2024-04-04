import { Button, Input, Table, Typography, message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addBalance,
  getAllTransaction,
  getCustomerOrderHistory,
} from "../../redux/slices/artworkSlice";
import Cookies from "js-cookie";
import {
  getAllTransactionSelector,
  getCustomerOrderHistorySelector,
  getSingleUserSelector,
} from "../../redux/selector";
import { getUser } from "../../redux/slices/userSlice";

const ArtworkPurchaseHistoryPage = () => {
  const dispatch = useDispatch();
  const creatorId = Cookies.get("sessionCookie");
  const userId = Cookies.get("sessionCookie");
  const adminState = sessionStorage.getItem("admin");
  const allTransaction = useSelector(getAllTransactionSelector);
  const getSingleUser = useSelector(getSingleUserSelector);
  const customerOrderHistory = useSelector(getCustomerOrderHistorySelector);
  const [currentTextColor, setCurrentTextColor] = useState("green");
  const [showAddBalanceForm, setShowAddBalanceForm] = useState(false);
  const [balanceInput, setBalanceInput] = useState("");
  const columnsAdmin = [
    {
      title: "Creator name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => {
        return <p>$ {price}</p>;
      },
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (record) => {
        return (
          <img src={record} style={{ height: "200px", width: "250px" }}></img>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email ",
    },
  ];
  const columnsUser = [
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Date Time",
      dataIndex: "date",
      key: "date",
    },
  ];
  console.log("admin", adminState);
  useEffect(() => {
    if (adminState === "true") {
      dispatch(getAllTransaction());
    } else {
      dispatch(getCustomerOrderHistory(creatorId));
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

  const handleAddBalanceClick = () => {
    setShowAddBalanceForm(true); // Hiển thị form khi nhấn vào nút "Add Balance"
  };

  const handleSubmitBalance = () => {
    console.log(balanceInput);
    const values = { userId, amount: parseFloat(balanceInput) };
    dispatch(addBalance(values))
      .unwrap()
      .then((response) => {
        if (response && response.status === 200) {
          dispatch(getUser(userId));
          message.success("Deposited successfully");
        } else {
          message.error("Deposited unsuccessfully");
        }
      });

    setShowAddBalanceForm(false); // Ẩn form sau khi submit
    setBalanceInput(""); // Reset giá trị balance input
  };

  const handleCancelAddBalance = () => {
    setShowAddBalanceForm(false); // Ẩn form khi cancel
    setBalanceInput(""); // Reset giá trị balance input
  };
  const handleInputChange = (e) => {
    // Parse the input value as a number
    let value = parseInt(e.target.value);

    // Check if the value exceeds the maximum allowed (1000)
    if (value > 2000) {
      // If it exceeds, set the value to the maximum (1000)
      value = 2000;
    }

    // Update the state with the sanitized value
    setBalanceInput(value.toString());
  };
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
      <div
        className="buttonAddBalance"
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <div
          className="buttonAddBalance"
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          {showAddBalanceForm ? (
            // Nếu hiển thị form, render form
            <div>
              <Input
                type="number"
                placeholder="Enter balance"
                value={balanceInput}
                onChange={handleInputChange}
                style={{ marginBottom: "10px" }}
                max={2000}
              />
              <Button type="primary" onClick={handleSubmitBalance}>
                Submit
              </Button>
              <Button onClick={handleCancelAddBalance}>Cancel</Button>
            </div>
          ) : (
            // Nếu không hiển thị form, render nút "Add Balance"
            <Button
              style={{ height: "90px", width: "250px", fontSize: "30px" }}
              onClick={handleAddBalanceClick}
            >
              Add Balance
            </Button>
          )}
        </div>
      </div>
      <div className="titleHistory">
        <Typography.Title style={{ fontSize: "100px" }}>
          History
        </Typography.Title>
      </div>
      <div className="historyOrderTable">
        <Table
          columns={adminState === "true" ? columnsAdmin : columnsUser}
          dataSource={
            adminState === "true"
              ? allTransaction?.map((item) => {
                  return {
                    _id: item?._id,
                    title: item?.artwork?.title,
                    description: item?.artwork?.description,
                    price: item?.artwork?.price,
                    type: item?.artwork?.typeDesign,
                    image: item?.artwork?.image,
                    likes: item?.artwork?.likes,
                    name: item?.creator[0]?.name,
                    email: item?.creator[0].email,
                    artworkId: item?.artworkId,
                    userId: item?.userId,
                  };
                })
              : customerOrderHistory?.map((item) => {
                  return {
                    description: item?.description,
                    type: item?.type,
                    date: item?.dateTime,
                    amount: item?.amount,
                  };
                })
          }
        />
      </div>
    </div>
  );
};
export default ArtworkPurchaseHistoryPage;
