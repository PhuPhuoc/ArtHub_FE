import {
  Alert,
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Select,
  Space,
  Typography,
  Upload,
} from "antd";
import { FaPlus } from "react-icons/fa";
import "./PostArt.css";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const PostArt = () => {
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 6,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 14,
      },
    },
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="PostArtPage">
      <div
        className="firstSection"
        style={{
          height: "70vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography.Title
          style={{
            fontSize: "70px",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            marginTop: "60px",
            fontWeight: "900",
          }}
        >
          The #1 job board for <br /> graphic design jobs
        </Typography.Title>
        <Typography.Text
          style={{
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            color: "gray",
          }}
        >
          Dribbble is the heart of the design community and the best resource to
          discover <br /> and connect with designers and jobs worldwide.
        </Typography.Text>
        <Button
          className="postArtBtn"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <FaPlus
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          />
          Post Your Creation
        </Button>
      </div>
      <Modal
        style={{ fontSize: "30px" }}
        title="Tell us about your post: "
        open={isOpen}
        onCancel={() => {
          setIsOpen(false);
        }}
        width={1000}
        footer={null}
      >
        <Form
          {...formItemLayout}
          variant="filled"
          style={{
            width: "100%",
            alignItems: "flex-start",
          }}
          labelAlign="left"
        >
          <Form.Item
            label="Post Title"
            name="Input"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input placeholder="Input Title" />
          </Form.Item>

          <Form.Item
            label="Post Descriptions"
            name="PostDescriptions"
            style={{ height: "100px" }}
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input.TextArea
              placeholder="Post Descriptions"
              style={{ height: "100px" }}
            />
          </Form.Item>

          <Form.Item
            label="What type of designs you want"
            style={{ height: "100px" }}
          >
            <Select>
              <Select.Option value=""></Select.Option>
              <Select.Option value="discover">Discover</Select.Option>
              <Select.Option value="animation">Animation</Select.Option>
              <Select.Option value="culture">Culture</Select.Option>
              <Select.Option value="technology">Technology</Select.Option>
              <Select.Option value="food">Food</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            style={{ marginTop: "-40px" }}
          >
            <Upload action="/upload.do" listType="picture-card">
              <button
                style={{
                  border: 0,
                  background: "none",
                }}
                type="button"
              >
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Upload
                </div>
              </button>
            </Upload>
          </Form.Item>

          <Form.Item
            label="Your Name"
            name="Input"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input placeholder="Your full name" />
          </Form.Item>
          <Form.Item
            label="Your Email"
            name="Email"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input placeholder="Your email" />
          </Form.Item>
          <Form.Item
            label="Birthday"
            name="Birthday"
            style={{ marginTop: "20px" }}
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <DatePicker style={{ width: "300px" }} />
          </Form.Item>
          <Form.Item label="Gender">
            <Select>
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="male">Female</Select.Option>
              <Select.Option value="male">Don't want answer</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button htmlType="button">Reset</Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default PostArt;
