import React, { useEffect, useState } from "react";
import "./PaymentPage.css";
import {
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  Space,
  Typography,
  message,
} from "antd";
import { BsCash } from "react-icons/bs";
import QRCode from "qrcode.react";
import QR from "../../assets/images/QR.png";
import { getUserCartSelector } from "../../redux/selector";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart, placeOrder } from "../../redux/slices/artworkSlice";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const { Option } = Select;
const countryOptions = [
  { label: "United States", value: "US" },
  { label: "United Kingdom", value: "UK" },
  { label: "Canada", value: "CA" },
  { label: "VietNam", value: "VN" },
  { label: "France", value: "FA" },
  { label: "Japan", value: "JA" },
  { label: "Germany", value: "GER" },
];
const options = [
  { value: 1, label: "Direct Bank Transfer" },
  { value: 2, label: "Cash On Delivery" },
];

const PaymentPage = () => {
  const [value, setValue] = useState(1);
  const [showQR, setShowQR] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const cartData = useSelector(getUserCartSelector);
  const userId = Cookies.get("sessionCookie");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setValue(e.target.value);
    setShowQR(e.target.value === 1);
  };

  const onChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const calculateTotal = () => {
    let total = 0;
    cartData.forEach((item) => {
      total += parseFloat(item?.artworkDetails?.price) || 0;
    });
    return total.toFixed(2);
  };

  const handlePlaceOrder = () => {
    if (isChecked) {
      dispatch(placeOrder(userId))
        .unwrap()
        .then(() => {
          message.success("Order Placed Successfully");
          navigate("/orderpage");
        })
        .catch((error) => {
          message.error("Failed to place order: " + error.message);
        });
    } else {
      message.warning("Please agree to the terms and conditions.");
    }
  };

  useEffect(() => {
    dispatch(getUserCart(userId));
  }, [userId]);

  return (
    <div
      className="paymentPage"
      style={{ minHeight: "100vh", width: "100%", display: "flex" }}
    >
      <div className="billingDetails" style={{ flex: 1 }}>
        <Typography.Title
          level={1}
          style={{
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            borderBottom: "3px solid green",
            width: "400px",
            color: "green",
            marginBottom: "100px",
          }}
        >
          Payment Method
          <BsCash size={40} color="green" style={{ marginLeft: "20px" }} />
        </Typography.Title>
      </div>
      <div
        className="yourOrders"
        style={{
          flex: 1,
          backgroundColor: "#faf0e6",
          minHeight: "70vh",
          flexDirection: "column",
          borderRadius: "10px",
          width: "100%",
        }}
      >
        <Typography.Title
          style={{
            fontWeight: "700",
          }}
        >
          Your Orders
        </Typography.Title>
        <div
          className="orderDetails"
          style={{
            backgroundColor: "white",
            width: "80%",
            marginLeft: "90px",
            flexDirection: "row",
          }}
        >
          <Typography.Title>Product</Typography.Title>
          {cartData?.map((item, index) => {
            return (
              <div
                className="orders"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "20px",
                }}
              >
                <img
                  style={{
                    height: "150px",
                    width: "200px",
                    borderRadius: "10px",
                  }}
                  src={item?.artworkDetails?.image}
                />
                <Typography.Text
                  style={{
                    fontSize: "20px",
                    marginLeft: "20px",
                    display: "flex",
                  }}
                >
                  {item?.artworkDetails?.title}
                </Typography.Text>
                <Typography.Text
                  style={{
                    fontSize: "20px",
                    marginLeft: "auto",
                    marginRight: "20px",
                    display: "flex",
                  }}
                >
                  ${item?.artworkDetails?.price}
                </Typography.Text>
              </div>
            );
          })}
          <div className="totalCount">
            <Typography.Title>Total: ${calculateTotal()}</Typography.Title>
          </div>

          <div
            className="paymentMethods"
            style={{ marginLeft: "20px", marginTop: "20px" }}
          >
            {options.map((option) => (
              <div key={option.value} style={{ marginBottom: "20px" }}>
                <Radio
                  value={option.value}
                  checked={value === option.value}
                  onChange={handleChange}
                >
                  <span style={{ fontSize: "20px" }}>{option.label}</span>
                </Radio>
                {option.value === 1 && value === 1 && showQR && (
                  <div style={{ marginTop: "20px", textAlign: "center" }}>
                    <QRCode value={QR} size={200} />
                  </div>
                )}
              </div>
            ))}
            <Typography.Text>
              Your personal data will be used to process your order, support
              your experience throughout this website and for other purpose
              described in our{" "}
              <a
                href="https://www.termsfeed.com/blog/sample-terms-of-use-template/"
                target="blank"
              >
                Term of Use
              </a>
            </Typography.Text>
            <div style={{ marginTop: "20px" }}>
              <Checkbox style={{ fontSize: "18px" }} onChange={onChange}>
                I have read and agree to the website terms and conditions
              </Checkbox>
            </div>
            <div
              className="btnPlaceOrder"
              style={{
                height: "100px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                className="placeOrderButton"
                style={{
                  fontSize: "40px",
                  height: "100",
                  width: "60%",
                  backgroundColor: isChecked ? "black" : "grey", // Màu xám nếu checkbox không được chọn
                  color: "white",
                  borderRadius: "8px",
                  cursor: isChecked ? "pointer" : "not-allowed", // Không cho phép click nếu checkbox không được chọn
                }}
                onClick={handlePlaceOrder} // Gọi hàm xử lý đặt hàng khi click
                disabled={!isChecked} // Disable button nếu checkbox không được chọn
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PaymentPage;
