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
import { getAllUser } from "../../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { getUserSelector } from "../../redux/selector";
const getTagColor = (tag) => {
  switch (tag) {
    case "admin":
      return "geekblue";
    case "audience":
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
    key: "role",
    dataIndex: "role",
    render: (record) => (
      <>
        {record && (
          <Tag color={getTagColor(record)} key={record}>
            {record.toUpperCase()}
          </Tag>
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
        src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
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
      <Button onClick={}>
        View All Posts
      </Button>
    ),
  },
];

const Admin = () => {
  const dispatch = useDispatch();
  const userData = useSelector(getUserSelector);
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
  const [form] = Form.useForm();
  const [data, setData] = useState(dataAdmin);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [formEdit] = Form.useForm();
  const [editModalVisible, setEditModalVisible] = useState(false);

  const [titleBackgroundColor, setTitleBackgroundColor] = useState("#ffffff");
  const [titleTextColor, setTitleTextColor] = useState("#000000");

  const titleRef = useRef(null);

  const textColors = ["#000000", "#ffffff", "#ff0000", "#00ff00", "#0000ff"];

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
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

const handleRowClick = (user, index) => {
  if (selectedUser && selectedUser.key === user.key && selectedRowIndex === index) {
    // Si l'utilisateur clique à nouveau sur la même ligne déjà sélectionnée, désélectionner
    setSelectedUser(null);
    setSelectedRowIndex(null); // Réinitialiser également l'index de la ligne sélectionnée
  } else {
    // Sinon, sélectionner la ligne cliquée
    setSelectedUser(user);
    setSelectedRowIndex(index);
  }

  // Console log the selected user
  console.log(user);
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

  const handleBubbleClick = (userId) => {
    setSelectedUserId(userId);
  };

  const handleModalVisible = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleSaveEdit = () => {
    formEdit
      .validateFields()
      .then((values) => {
        const { name, email, password, avatarUrl } = values;
  
        const updatedUser = {
          name,
          mail: email,
          password,
          picture: avatarUrl,
        };
  
        fetch(`http://localhost:5000/api/users/${selectedUser._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        })
          .then((response) => {
            if (response.ok) {
              // If update successful, update UI
              const updatedData = data.map((user) =>
                user.key === selectedUser.key ? { ...user, ...values } : user
              );
              setData(updatedData);
              setEditModalVisible(false);
              setSelectedUser(null);
              dispatch(getAllUser());

            } else {
              // Handle error response from server
              throw new Error("Failed to update user");
            }
          })
          .catch((error) => {
            console.error("Error updating user:", error);
            Modal.error({
              title: "Error",
              content: "Failed to update user. Please try again later.",
            });
          });
      })
      .catch((errorInfo) => {
        console.log("Failed:", errorInfo);
      });
  };
  
  const handleAddUser = (values) => {
    const newUser = {
      name: values.name,
      email: values.email,
      password: values.password,
      role: values.role,
    };

    fetch("http://localhost:5000/api/admin/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((newUserData) => {
        // Update local state with the added user data
        setData([...data, newUserData]); // Assuming `newUserData` holds the data of the newly added user
        setIsModalVisible(false);
    })
      .catch((error) => {
        console.error("Error adding user:", error);
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
          // Send DELETE request to backend
          fetch(`http://localhost:5000/api/admin/users/${selectedUser._id}`, {
            method: "DELETE",
          })
            .then((response) => {
              if (response.ok) {
                // If deletion successful, update UI
                const updatedData = data.filter(
                  (user) => user.key !== selectedUser.key
                );
                const updatedDataWithStt = updateSttColumn(updatedData);
                setData(updatedDataWithStt);
                setSelectedUser(null);
  
                // Reload data from the server
                dispatch(getAllUser());
              } else {
                // Handle error response from backend
                console.error("Error deleting user:", response.statusText);
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

  useEffect(() => {
    dispatch(getAllUser());
  }, []);

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
      <div className="adminPageTitle" ref={titleRef}>
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
      dataSource={userData}
      rowKey="_id"
      rowSelection={rowSelection}
      onRow={(record, index) => ({
        onClick: () => handleRowClick(record, index),
      })}
      rowClassName={(record, index) =>
        index === selectedRowIndex ? "selectedRow" : ""
      }
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
