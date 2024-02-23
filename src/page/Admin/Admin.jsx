import React, { useState } from "react";
import {
  Button,
  Card,
  Form,
  Input,
  Modal,
  Select,
  Space,
  Table,
  Tag,
  Typography,
} from "antd";
import { dataAdmin } from "./dataAdmin";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Birthday",
    dataIndex: "birthday",
    key: "birthday",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },

  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 100 ? "  " : "green";

          if (tag.toLowerCase() === "developer") {
            color = "geekblue";
          }
          if (tag.toLowerCase() === "user") {
            color = "volcano";
          }
          if (tag.toLowerCase() === "creator") {
            color = "yellow";
          }

          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Avatar",
    key: "avatar",
    dataIndex: "avatarUrl",
    render: (avatarUrl) => (
      <img
        src={avatarUrl}
        alt="Avatar"
        style={{ maxWidth: "50px", maxHeight: "50px" }}
      />
    ),
  },
  {
    title: "Image",
    key: "image",
    dataIndex: "posts",
    render: (posts) => (
      <Button
        type="link"
        onClick={() => {
          Modal.info({
            width: 1800,
            title: "User's Posts",
            content: (
              <div>
                {posts?.map((post, index) => (
                  <Card key={index} title={post.title}>
                    <img
                      src={post.imageURL}
                      alt={`Post ${index + 1}`}
                      style={{ maxWidth: "50%", marginBottom: "10px" }}
                    />
                    <h1>Description:</h1>
                    <p>{post.description}</p>
                  </Card>
                ))}
              </div>
            ),
          });
        }}
      >
        View All Posts
      </Button>
    ),
  },
];

const Admin = () => {
  const [form] = Form.useForm()  
  const [data, setData] = useState(dataAdmin);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleAddUser = (values) => {
    const newUser = {
      key: data.length + 1,
      name: values.name,
      birthday: values.birthday,
      email: values.email,
      gender: values.gender,
      tags: values.tags ? values.tags.split(",") : [],
      avatarUrl: values.avatarUrl,
      posts: [],
    };
    setData([...data, newUser]);
    setIsModalVisible(false);
  };
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <div
        className="adminPageTitle"
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Typography.Title
          style={{
            height: "100px",
            width: "500px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "20px",
            border: "2px dashed black",
          }}
        >
          ADMIN'S DASHBOARD
        </Typography.Title>
      </div>

      <Table columns={columns} dataSource={data} />

      <div
        className="btnTableContainer"
        style={{ height: "100px", transform: "translateX(20px)" }}
      >
        <Button
          style={{
            backgroundColor: "yellow",
            marginRight: "20px",
            fontSize: "20px",
            width: "100px",
            height: "40px",
          }}
        >
          Edit
        </Button>
        <Button
          style={{
            backgroundColor: "greenyellow",
            marginRight: "20px",
            fontSize: "20px",
            width: "100px",
            height: "40px",
          }}
          onClick={() => setIsModalVisible(true)}
        >
          Add
        </Button>
        <Button
          style={{
            backgroundColor: "red",
            fontSize: "20px",
            width: "100px",
            height: "40px",
          }}
        >
          Delete
        </Button>
      </div>
      <Modal
        title="Add User"
        open={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false);
          form.resetFields()
        }}
        footer={null}
      >
        <Form form={form} name="addUserForm" onFinish={handleAddUser}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input the name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Birthday"
            name="birthday"
            rules={[{ required: true, message: "Please input the birthday!" }]}
          >
            <Input type="date" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input the email!" },
              { type: "email", message: "Invalid email address" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Gender"
            name="gender"
            rules={[{ required: true, message: "Please select the gender!" }]}
          >
            <Select>
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
              <Select.Option value="other">Other</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Tags" name="tags">
            <Input />
          </Form.Item>

          <Form.Item
            label="Avatar URL"
            name="avatarUrl"
            rules={[
              { required: true, message: "Please input the avatar URL!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add User
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default Admin;
