import React, { useEffect, useState } from "react";
import { Button, Table, Divider, Radio, message, Modal } from "antd";
import "./OrderPage.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, getUserCart } from "../../redux/slices/artworkSlice";
import Cookies from "js-cookie";
import { getUserCartSelector } from "../../redux/selector";
import { useNavigate } from "react-router-dom";
import { MdDangerous } from "react-icons/md";

const OrderPage = () => {
  const navigate = useNavigate();
  const idUser = Cookies.get("sessionCookie");
  const dispatch = useDispatch();
  const [showErrorModal, setShowErrorModal] = useState(false);
  const cartData = useSelector(getUserCartSelector);
  useEffect(() => {
    dispatch(getUserCart(idUser));
  }, [idUser]);
  const deleteFromCart = (userId, artworkId) => {
    const values = { userId, artworkId };
    dispatch(deleteCart(values))
      .unwrap()
      .then(() => {
        dispatch(getUserCart(userId));
        message.success("Delete Successful");
      });
  };
  const clickToPlaceOrder = () => {
    if (cartData && cartData.length > 0) {
      navigate("/paymentpage");
    } else {
      setShowErrorModal(true);
    }
  };
  const columns = [
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
      title: "Image",
      dataIndex: "image",
      render: (record) => {
        return <img src={record} style={{ height: "150px", width: "120px" }} />;
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (record) => {
        return <p>$ {record}</p>;
      },
    },
    {
      render: (record) => (
        <Button
          onClick={() => deleteFromCart(record.userId, record._id)}
          danger
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div
      className="orderPage"
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "rgba(229, 231, 82, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="orderTab"
        style={{
          height: "auto",
          width: "80%",
          backgroundColor: "white",
          padding: "20px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          className="orderTitle"
          style={{ fontSize: "40px", fontWeight: "900" }}
        >
          YOUR ORDERS
          <div className="orderTable">
            <Table
              columns={columns}
              dataSource={cartData?.map((item) => {
                return {
                  _id: item?._id,
                  title: item?.artworkDetails?.title,
                  description: item?.artworkDetails?.description,
                  price: item?.artworkDetails?.price,
                  image: item?.artworkDetails?.image,
                  likes: item?.artworkDetails?.likes,
                  artworkId: item?.artworkId,
                  userId: item?.userId,
                };
              })}
            />
          </div>
          <div className="btnPayOrder">
            <Button
              style={{
                width: "100%",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "30px",
                backgroundColor: "#E04A45",
                color: "white",
                fontWeight: "800",
              }}
              onClick={clickToPlaceOrder}
            >
              Click To Continue Pay Order
            </Button>
          </div>
          <Modal
            style={{ fontSize: "20px" }}
            title="Error"
            visible={showErrorModal}
            onCancel={() => setShowErrorModal(false)}
            footer={[
              <Button onClick={() => navigate("/ourhub")}>
                Go back to Our Hub Page
              </Button>,
            ]}
          >
            <MdDangerous
              style={{
                fontSize: "30px",
                color: "#CC2D2D",
                transform: "translateX(45px)translateY(-34px)",
              }}
            />
            <div className="textModal" style={{ fontSize: "16px" }}>
              There are no items in your order. Please add items to proceed.
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};
export default OrderPage;
