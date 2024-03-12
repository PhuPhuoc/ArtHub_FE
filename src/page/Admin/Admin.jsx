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
import axios from'axios';
import Cookies from "js-cookie";
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
  const [users, setUsers] = useState([]);
  const [form] = Form.useForm();
  const [data, setData] = useState(users);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [formEdit] = Form.useForm();
  const [editModalVisible, setEditModalVisible] = useState(false);

  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');

  const [titleBackgroundColor, setTitleBackgroundColor] = useState("#ffffff");
  const [titleTextColor, setTitleTextColor] = useState("#000000");

  const titleRef = useRef(null);

  const textColors = ["#000000", "#ffffff", "#ff0000", "#00ff00", "#0000ff"];

  const [sessionCookie, setSessionCookie] = useState("");

  useEffect(() => {
    const cookieValue = Cookies.get("sessionCookie");
    console.log("COOKIE", cookieValue);
    if (cookieValue) {
      setSessionCookie(cookieValue);
    }
  }, []);

  useEffect(() => {
    if (!sessionCookie) {
      window.location.href = "/loginpage";
    }
  }, [sessionCookie]);
  const handleGetUsers = () => {
    axios
        .get('http://localhost:5000/api/admin/users')
        .then((res) => {
          setUsers(res.data.users);
          setData(res.data.users); // Mettre à jour data avec les nouveaux utilisateurs
        })
        .catch((e) => {
          console.error(`Error fetchin users: ${e}`);
        });
  }



  const handleDeleteUser = () => {
    axios
        .delete(`http://localhost:5000/api/admin/users/${selectedUser}`)
        .then((res) => {
          console.log(res.data.message);
        })
        .catch((e) => {
          console.error(e);
        });
  }

  useEffect(() => {
    handleGetUsers()
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newBackgroundColor = getRandomColor();
      setTitleBackgroundColor(newBackgroundColor);

      const newTextColor =
        textColors[Math.floor(Math.random() * textColors.length)];
      setTitleTextColor(newTextColor);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

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
    console.log("User clicked:", user);
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

  useEffect(() => {
    const users = axios
        .get('http://localhost:5000/api/admin/users')
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.error(`Error: ${error}`);
        });

    setUsers(users);
  }, [])
  const handleAddUser = (values) => {
    const newUser = {
      name: values.name,
      email: values.email,
      password: values.password,
      role: values.role,
    };
    setData([...data, newUser]);
    setIsModalVisible(false);
    axios
        .post('http://localhost:5000/api/admin/users', {
          name: name,
          email: email,
          birhtday: birthday,
          avatar: avatar
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.error(`error ${error}`);
        });
  };

  /*const handleDeleteUser = () => {
    if (selectedUser) {
      Modal.confirm({
        title: "Are you sure?",
        content: "This action cannot be undone.",
        okText: "Yes",
        cancelText: "Cancel",
        onOk: () => {
          const updatedData = data.filter(
            (user) => user.key !== selectedUser.key
          );
          const updatedDataWithStt = updateSttColumn(updatedData);
          setData(updatedDataWithStt);
          setSelectedUser(null);
        },
        onCancel: () => {},
      });
    }
  };*/

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
            value={name} onChange={(e) => setName(e)}
          >
            <Input   />
          </Form.Item>
          <Form.Item
            label="Birthday"
            name="birthday"
            rules={[{ required: true, message: "Please input the birthday!" }]}
          >
            <Input type="date" value={birthday} onChange={(e) => setBirthday(e)}/>
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input the email!" },
              { type: "email", message: "Invalid email address" },
            ]}
          >
            <Input value={email} onChange={(e) => setEmail(e)}/>
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
