import React, { useEffect, useRef, useState } from "react";
import "./Admin.css";
import {
  Button,
  Card,
  Form,
  Input,
  Modal,
  Radio,
  Select,
  Space,
  Table,
  Tag,
  Typography,
} from "antd";
import { dataAdmin } from "./dataAdmin";
const getTagColor = (tag) => {
  switch (tag.toLowerCase()) {
    case "developer":
      return "geekblue";
    case "user":
      return "volcano";
    case "creator":
      return "yellow";
    default:
      return "green";
  }
};
const columns = [
  {
    title: "Stt",
    dataIndex: "key",
    key: "key",
  },
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
        {Array.isArray(tags) ? (
          tags.map((tag) => (
            <Tag color={getTagColor(tag)} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          ))
        ) : (
          <Tag color="default">Invalid Tags</Tag>
        )}
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
            width: "800px",
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
                    <h1 className="post-title">Description:</h1>
                    <p className="post-description">{post.description}</p>
                    <Button type="link" style={{ color: "red" }}>
                      Delete Post
                    </Button>
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
  const getTagColor = (tag) => {
    switch (tag.toLowerCase()) {
      case "developer":
        return "geekblue";
      case "user":
        return "volcano";
      case "creator":
        return "yellow";
      default:
        return "green";
    }
  };
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [titleBackgroundColor, setTitleBackgroundColor] = useState("#ffffff");
  const [titleTextColor, setTitleTextColor] = useState("#000000");
  const titleRef = useRef(null);

  const textColors = ["#000000", "#ffffff", "#ff0000", "#00ff00", "#0000ff"];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/admin/users");
      const userData = await response.json();
      setData(userData);
    } catch (error) {
      console.error("Erreur lors de la récupération des données:", error);
    }
  };
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const updateSttColumn = (data) => {
    return data.map((item, index) => {
      return { ...item, key: index + 1 };
    });
  };

  const handleRowClick = (user) => {
    setSelectedUser(user);
  };

  const rowSelection = {
    type: "radio",
    selectedRowKeys: selectedUser ? [selectedUser.key] : [],
    onChange: (selectedRowKeys, selectedRows) => {
      if (selectedRows.length > 0) {
        setSelectedUser(selectedRows[0]);
      } else {
        setSelectedUser(null);
      }
    },
  };
  const handleEditClick = () => {
    if (!selectedUser) {
      Modal.warning({
        title: "Warning",
        content: "Please select a user to edit.",
      });
      return;
    }

    formEdit.setFieldsValue(selectedUser);
    setEditModalVisible(true);
  };

  const handleSaveEdit = () => {
    formEdit
      .validateFields()
      .then((values) => {
        const updatedData = data.map((user) =>
          user.key === selectedUser.key ? { ...user, ...values } : user
        );

        setData(updatedData);
        setEditModalVisible(false);
        setSelectedUser(null);
      })
      .catch((errorInfo) => {
        console.log("Failed:", errorInfo);
      });
  };
  const handleAddUser = async (values) => {
    try {
      const response = await fetch("/api/admin/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const newUser = await response.json();
      setData([...data, newUser]);
      setIsModalVisible(false);
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'utilisateur:", error);
    }
  };

    // Appel Fetch pour créer un nouvel utilisateur
    fetch("/api/admin/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("New user created:", data);
        // Mettre à jour l'état avec le nouvel utilisateur créé
        setData([...data, data]);
        setIsModalVisible(false);
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  const handleDeleteUser = () => {
    if (selectedUser) {
      Modal.confirm({
        title: "Are you sure?",
        content: "This action cannot be undone.",
        okText: "Yes",
        cancelText: "Cancel",
        onOk: () => {
          // Appel Fetch pour supprimer un utilisateur
          fetch(`/api/admin/users/${selectedUser.key}`, {
            method: "DELETE",
          })
            .then((response) => {
              if (response.ok) {
                console.log("User deleted successfully.");
                const updatedData = data.filter(
                  (user) => user.key !== selectedUser.key
                );
                setData(updatedData);
                setSelectedUser(null);
              } else {
                throw new Error("Failed to delete user.");
              }
            })
            .catch((error) => {
              console.error("Error deleting user:", error);
            });
        },
        onCancel: () => {},
      });
    }
  };
  return (
    <div
      style={{ width: "100%", height: "auto", background: "#0c192c" }}
      className="bubbblesContainer"
    >
      <div className="bubbles">
        <span style={{ "--i": 17 }}></span>
        <span style={{ "--i": 19 }}></span>
        <span style={{ "--i": 22 }}></span>
        <span style={{ "--i": 20 }}></span>
        <span style={{ "--i": 18 }}></span>
        <span style={{ "--i": 15 }}></span>
        <span style={{ "--i": 20 }}></span>
        <span style={{ "--i": 22 }}></span>
        <span style={{ "--i": 17 }}></span>
        <span style={{ "--i": 18 }}></span>
        <span style={{ "--i": 20 }}></span>
        <span style={{ "--i": 22 }}></span>
        <span style={{ "--i": 25 }}></span>
        <span style={{ "--i": 28 }}></span>
        <span style={{ "--i": 30 }}></span>
        <span style={{ "--i": 12 }}></span>
        <span style={{ "--i": 18 }}></span>
        <span style={{ "--i": 16 }}></span>
        <span style={{ "--i": 17 }}></span>
        <span style={{ "--i": 20 }}></span>
        <span style={{ "--i": 22 }}></span>
        <span style={{ "--i": 24 }}></span>
        <span style={{ "--i": 12 }}></span>
        <span style={{ "--i": 16 }}></span>
        <span style={{ "--i": 20 }}></span>
        <span style={{ "--i": 22 }}></span>
        <span style={{ "--i": 15 }}></span>
        <span style={{ "--i": 20 }}></span>
        <span style={{ "--i": 17 }}></span>
        <span style={{ "--i": 22 }}></span>
        <span style={{ "--i": 25 }}></span>
        <span style={{ "--i": 28 }}></span>
        <span style={{ "--i": 30 }}></span>
        <span style={{ "--i": 12 }}></span>
        <span style={{ "--i": 18 }}></span>
        <span style={{ "--i": 16 }}></span>
        <span style={{ "--i": 17 }}></span>
        <span style={{ "--i": 20 }}></span>
        <span style={{ "--i": 22 }}></span>
        <span style={{ "--i": 24 }}></span>
        <span style={{ "--i": 12 }}></span>
        <span style={{ "--i": 16 }}></span>
        <span style={{ "--i": 20 }}></span>
        <span style={{ "--i": 22 }}></span>
        <span style={{ "--i": 15 }}></span>
        <span style={{ "--i": 20 }}></span>
        <span style={{ "--i": 17 }}></span>
      </div>
      <div
        className="adminPageTitle"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        ref={titleRef}
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
            transition: "background-color 1s ease",
            backgroundColor: titleBackgroundColor,
            color: titleTextColor,
          }}
        >
          ADMIN'S DASHBOARD
        </Typography.Title>
      </div>

      <Table
        columns={columns}
        dataSource={data}
        rowKey="key"
        rowSelection={rowSelection}
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}
      />

      <div
        className="btnTableContainer"
        style={{
          height: "100px",
          transform: "translateX(20px)",
        }}
      >
        <Button
          style={{
            backgroundColor: "yellow",
            marginRight: "20px",
            fontSize: "20px",
            width: "100px",
            height: "40px",
          }}
          onClick={handleEditClick}
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
          onClick={handleDeleteUser}
          disabled={!selectedUser}
        >
          Delete
        </Button>
      </div>
      <Modal
        title="Edit User"
        visible={editModalVisible}
        onCancel={() => setEditModalVisible(false)}
        destroyOnClose
        footer={null}
      >
        <Form form={formEdit} name="editUserForm">
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

          <Space>
            <Button type="primary" onClick={handleSaveEdit}>
              Save
            </Button>
            <Button onClick={() => formEdit.resetFields()} type="default">
              Reset
            </Button>
          </Space>
        </Form>
      </Modal>

      <Modal
        title="Add User"
        visible={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false);
          form.resetFields();
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
            <Space>
              <Button type="primary" htmlType="submit">
                Add User
              </Button>
              <Button onClick={() => form.resetFields()} type="default">
                Reset
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default Admin;
