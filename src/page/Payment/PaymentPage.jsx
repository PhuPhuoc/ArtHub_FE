import React, { useState } from "react";
import "./PaymentPage.css";
import { Checkbox, Form, Input, Radio, Select, Space, Typography } from "antd";
import { BsCash } from "react-icons/bs";
import QRCode from "qrcode.react";
import QR from "../../assets/images/QR.png";

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

  const handleChange = (e) => {
    setValue(e.target.value);
    setShowQR(e.target.value === 1);
  };

  const onChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handlePlaceOrder = () => {
    if (isChecked) {
      console.log("Order placed successfully!");
    } else {
      console.log(
        "Please agree to terms and conditions before placing the order."
      );
    }
  };
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
        <Typography.Title level={1} style={{ fontWeight: "900" }}>
          Billing Details
        </Typography.Title>
        <Form
          variant="filled"
          style={{
            maxWidth: 800,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            fontSize: "20px",
          }}
        >
          <div style={{ display: "flex", gap: "40px" }}>
            <div style={{ flex: 1 }}>
              <Form.Item
                label="First Name"
                name="First Name"
                rules={[
                  {
                    required: true,
                    message: "Put Your First Name!",
                  },
                ]}
                labelStyle={{ fontSize: "20px" }}
              >
                <Input />
              </Form.Item>
            </div>
            <div style={{ flex: 1 }}>
              <Form.Item
                label="Last Name"
                name="Last Name"
                rules={[
                  {
                    required: true,
                    message: "Put Your Last Name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </div>
          </div>
          <Form.Item
            label="Phone Number"
            name="Phone Number"
            rules={[
              {
                required: true,
                message: "Put Your Phone Number!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Identity Card ID"
            name="Identity Card ID"
            rules={[
              {
                required: true,
                message: "Put Your Identity Card ID!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Country/Region"
            name="Select"
            rules={[
              {
                required: true,
                message: "Choose Your Country!",
              },
            ]}
          >
            <Select>
              {countryOptions.map((option) => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Address"
            name="Address"
            rules={[
              {
                required: true,
                message: "Input Address for transportation !",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Town or City"
            name="town or city"
            rules={[
              {
                required: true,
                message: "Input Town or City !",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="University"
            name="University"
            rules={[
              {
                required: true,
                message: "Must Input Your University!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
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
              src="https://getwallpapers.com/wallpaper/full/3/9/4/182376.jpg"
            />
            <Typography.Text
              style={{ fontSize: "20px", marginLeft: "20px", display: "flex" }}
            >
              Bubbles Of Water
            </Typography.Text>
            <Typography.Text
              style={{
                fontSize: "20px",
                marginLeft: "auto",
                marginRight: "20px",
                display: "flex",
              }}
            >
              $400
            </Typography.Text>
          </div>
          <div
            className="orders"
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "20px",
              marginTop: "20px",
            }}
          >
            <img
              style={{
                height: "150px",
                width: "200px",
                borderRadius: "10px",
              }}
              src="https://static.vecteezy.com/system/resources/thumbnails/007/128/109/original/abstract-technology-background-from-animated-lines-and-dots-abstract-digital-connection-moving-dots-and-lines-plexus-background-in-space-plexus-fantasy-abstract-technology-free-video.jpg"
            />
            <Typography.Text
              style={{ fontSize: "20px", marginLeft: "20px", display: "flex" }}
            >
              Universe
            </Typography.Text>
            <Typography.Text
              style={{
                fontSize: "20px",
                marginLeft: "auto",
                marginRight: "20px",
                display: "flex",
              }}
            >
              $700
            </Typography.Text>
          </div>
          <div
            className=" TotalCount"
            style={{
              marginTop: "30px",
              marginLeft: "20px",
              borderBottom: "2px solid black",
              display: "flex",
              gap: "200px",
            }}
          >
            <Typography.Text style={{ fontSize: "30px" }}>
              Total
            </Typography.Text>
            <Typography.Text
              style={{
                fontSize: "40px",
                marginLeft: "auto",
                marginRight: "20px",
              }}
            >
              $1100
            </Typography.Text>
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
