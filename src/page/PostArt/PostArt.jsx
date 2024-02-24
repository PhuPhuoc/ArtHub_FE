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

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [typeDesign, setTypeDesign] = useState('');
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    const [gender, setGender] = useState('');

    const handleGenderChange = (value) => {
        setGender(value);
    };

    const handleTypeDesignChange = (value) => {
        setTypeDesign(value);
    };

    const handleImageUpload = (info) => {
        if (info.file.status === 'done') {
            setImage(info.file.response.url);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const artwork = { title: title, description: description, typeDesign: typeDesign, image: image, name: name, email: email, birthday: birthday, gender: gender };
        fetch("http://localhost:5000/api/addartwork", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(artwork)
        })
            .then(response => {
                if (!response.ok)
                    throw new Error('Invalid artwork form');
                return response.json();
            })
            .then(data => {
                console.log("New artwork added", data);
            })
            .catch(error => {
                console.error("Error while sending artwork:", error.message);
            })
    };

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
            <Input placeholder="Input Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
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
              value={description} onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="What type of designs you want"
            style={{ height: "100px" }}
          >
            <Select onChange={handleTypeDesignChange}>
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
            <Upload action="/upload.do" listType="picture-card" onChange={handleImageUpload}>
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
            value={name} onChange={(e) => setName(e.target.value)}
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
            value={email} onChange={(e) => setEmail(e.target.value)}
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
            value={birthday} onChange={(e) => setBirthday(e.target.value)}
          >
            <DatePicker style={{ width: "300px" }} />
          </Form.Item>
          <Form.Item label="Gender">
            <Select onChange={handleGenderChange}>
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="male">Female</Select.Option>
              <Select.Option value="male">Don't want answer</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit" onClick={handleFormSubmit}>
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
