import {
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
import gsap from "gsap";
import star from "../../assets/images/stars.png";
import moon from "../../assets/images/moon.png";
import mountains_behind from "../../assets/images/mountains_behind.png";
import mountains_front from "../../assets/images/mountains_front.png";
import { FaPlus } from "react-icons/fa";
import "./PostArt.css";
import { useEffect, useRef, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const PostArt = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [typeDesign, setTypeDesign] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");

  const [isPageVisible, setIsPageVisible] = useState(false);

  const titleRef = useRef(null);
  const moonRef = useRef(null);
  const btnRef = useRef(null);
  const firstSectionRef = useRef(null);
  const mountains_frontRef = useRef(null);
  const mountains_behindRef = useRef(null);
  const handleExploreClick = () => {
    const firstSectionElement = firstSectionRef.current;

    firstSectionElement.scrollIntoView({ behavior: "smooth" });
  };

  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const titleElement = titleRef.current;
    const moonElement = moonRef.current;
    const btnElement = btnRef.current;
    const mountainsFrontElement = mountains_frontRef.current;
    const mountainsBehindElement = mountains_behindRef.current;
    const timeout = setTimeout(() => {
      setIsPageVisible(true);
    }, 500);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollDirection = scrollY > lastScrollY ? "down" : "up";

      gsap.to(titleElement, {
        y: scrollY / 2,
        opacity: scrollY > 100 ? 0 : 1,
        zIndex: scrollDirection === "up" ? 10000 : scrollY > 100 ? 0 : 2,
        duration: 0.5,
        ease: "power2.inOut",
      });
      gsap.to(moonElement, {
        y: scrollY / 2,
        opacity: scrollY > 100 ? 0 : 1,
        duration: 0.5,
        ease: "power2.inOut",
      });
      gsap.to(btnElement, {
        marginTop: `${scrollY / 2}px`,
        opacity: scrollY > 100 ? 0 : 1,
        duration: 0.5,
        ease: "power2.inOut",
      });
      // Adjust the animation for mountainsBehind
      gsap.to(mountainsBehindElement, {
        y: scrollY / 2,
        opacity: scrollY > 100 ? 0 : 1,
        duration: 0.5,
        ease: "power2.inOut",
      });
      gsap.to(mountainsFrontElement, {
        y: scrollY / 2,
        opacity: scrollY > 100 ? 0 : 1,
        duration: 0.5,
        ease: "power2.inOut",
      });

      setLastScrollY(scrollY);

      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, [lastScrollY]);
  const handleGenderChange = (value) => {
    setGender(value);
  };

  const handleTypeDesignChange = (value) => {
    setTypeDesign(value);
  };

  const handleImageUpload = (info) => {
    if (info.file.status === "done") {
      setImage(info.file.response.url);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const artwork = {
      title: title,
      description: description,
      typeDesign: typeDesign,
      image: image,
      name: name,
      email: email,
      birthday: birthday,
      gender: gender,
    };
    fetch("http://localhost:5000/api/addartwork", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(artwork),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Invalid artwork form");
        return response.json();
      })
      .then((data) => {
        console.log("New artwork added", data);
      })
      .catch((error) => {
        console.error("Error while sending artwork:", error.message);
      });
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
  const [form] = Form.useForm();

  const handleReset = () => {
    form.resetFields();
    form.setFieldsValue({ fileList: [] });
    form.setFieldsValue({ designType: "" });
  };

  return (
    <div
      className={`PostArtPage ${isPageVisible ? "visible" : ""}`}
      style={{
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        className="mainBackground"
        style={{
          background: "linear-gradient(#2b1055,#7597de)",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
        }}
      >
        <img src={star} id="star" />
        <img ref={moonRef} src={moon} id="moon" />
        <img
          ref={mountains_behindRef}
          src={mountains_behind}
          id="mountains_behind"
        />
        <h1
          style={{
            fontSize: "90px",
            position: "absolute",
            color: "white",
            fontWeight: "900",
            whiteSpace: "nowrap",
            zIndex: "10000",
            borderBottom: "5px solid white",
          }}
          ref={titleRef}
        >
          This is where <br /> success comes from
        </h1>
        <img
          ref={mountains_frontRef}
          src={mountains_front}
          id="mountains_front"
        />
        <Button
          ref={btnRef}
          style={{ zIndex: 1 }}
          className="exploreBtn"
          id="btn"
          onClick={handleExploreClick}
        >
          Explore
        </Button>
      </div>

      <div
        className="firstSection"
        ref={firstSectionRef}
        style={{
          height: "100vh",
          width: "100%",
          marginTop: "100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#1c0522",
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
            color: "white",
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
          form={form}
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
            <Input
              placeholder="Input Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="What type of designs you want"
            style={{ height: "100px" }}
            name="designType"
            rules={[
              {
                required: true,
                message: "Please select a design type!",
              },
            ]}
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
            name="fileList"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            style={{ marginTop: "-40px" }}
          >
            <Upload
              action="/upload.do"
              listType="picture-card"
              fileList={form.getFieldValue("fileList")}
              beforeUpload={(file) => {
                form.setFieldsValue({ fileList: [] });

                return false;
              }}
              onChange={handleImageUpload}
            >
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
            name="name"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
            value={name}
            onChange={(e) => setName(e.target.value)}
          >
            <Input placeholder="Your full name" />
          </Form.Item>
          <Form.Item
            label="Your Email"
            name="Email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
              {
                type: "email",
                message: "Please enter a valid email address!",
              },
            ]}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
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
          <Form.Item
            label="Price of the Image"
            name="imagePrice"
            rules={[
              {
                required: true,
                message: "Please input the price of the image!",
              },
            ]}
          >
            <Input type="number" placeholder="Enter the price" prefix="$" />
          </Form.Item>
          <Form.Item
            label="Dimensions"
            name="imageDimensions"
            rules={[
              {
                required: true,
                message: "Please input the dimensions of the image!",
              },
            ]}
          >
            <Input placeholder="Enter the dimensions (e.g., 800x600)" />
          </Form.Item>
          <Form.Item>
            <Space>
              <Button
                type="primary"
                htmlType="submit"
                onClick={handleFormSubmit}
              >
                Submit
              </Button>
              <Button htmlType="button" onClick={handleReset}>
                Reset
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default PostArt;
