import React, { useEffect, useRef, useState } from "react";
import "./Admin.css";
import {
  Button,
  Card,
  Form,
  Input, message,
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
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

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

const Admin = () => {
  const navigate = useNavigate();
  const Option = Select;

  const [sessionCookie, setSessionCookie] = useState("");
  useEffect(() => {
    const cookieValue = Cookies.get("sessionCookie");
    if (cookieValue) {
      setSessionCookie(cookieValue);
    } else {
      navigate("/loginpage");
    }
  }, []);

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
      title: "Manage",
      key: "image",
      dataIndex: "posts",
      render: (posts) => (
          <Select defaultValue="Select Action" style={{ width: 200 }} onChange={(value) => handleDropdownChange(value, posts)}>
            <Option value="comments">Manage Comments</Option>
            <Option value="artworks">Manage Artworks</Option>
          </Select>
      ),
    },
  ];

  const handleDropdownChange = (value, posts) => {
    const userId = selectedUser._id;
    if (value === "comments") {
      navigate(`/admin/manage/comments/${userId}`);
    } else if (value === "artworks") {
      navigate(`/admin/manage/artworks/${userId}`)
    }
  };

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
  const [addModal, setAddModal] = useState(false);

  const [titleBackgroundColor, setTitleBackgroundColor] = useState("#ffffff");
  const [titleTextColor, setTitleTextColor] = useState("#000000");

  // Add User Values
  const [addName, setAddName] = useState('');
  const [addPassword, setAddPassword] = useState('');
  const [addEmail, setAddEmail] = useState('');

  // Edit User Values
  const [editName, setEditName] = useState('')
  const [editEMail, setEditEmail] = useState('')
  const [editPassword, setEditPassword] = useState('')

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
      setSelectedUser(null);
    } else {
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

const handleAddUser = () => {
  axios.post('http://localhost:5000/api/register',
      {
        name: addName,
        email: addEmail,
        password: addPassword,
      })
    .then((newUserData) => {
      setData([...data, newUserData]);
      message.success("Added user successfully");
      setAddModal(false);
    })
    .catch((error) => {
      console.error("Error adding user:", error);
    });
};

const handleEditUser = (userId) => {
    const response = axios
        .put(`http://localhost:5000/api/users/${userId}`, {
      name: editName,
      email: editEMail,
      password: editPassword,
      picture: '',
    });

    if (!response) {
      console.log("Error fetching edit on profile");
    } else {
      message.success("Profile Update Successfully");
    }
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

const handleOpenProfile = () => {
  if (selectedUser && selectedUser._id) {
    const userId = selectedUser._id;
    if (userId === sessionCookie)
      navigate('/profile');
    else
      window.location.href = `/userprofile/${userId}`; // Navigate to user profile route
  }
};

return (
  <div
    style={{ width: "100%", height: "auto", background: "#0c192c" }}
    className="bubbblesContainer"
  >
    <div className="bubbles">
      {/* Your bubbles */}
    </div>
    <div className="adminPageTitle" ref={titleRef}>
      {/* Your title */}
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

    <div className="btnTableContainer" style={{ height: "100px", transform: "translateX(20px)" }}>
      <Button
        style={{ backgroundColor: "yellow", marginRight: "20px", fontSize: "20px", width: "100px", height: "40px" }}
        onClick={() => setIsModalVisible(true)}
      >
        Edit
      </Button>
      <Button
        style={{ backgroundColor: "greenyellow", marginRight: "20px", fontSize: "20px", width: "100px", height: "40px" }}
        onClick={() => setAddModal(true)}
      >
        Add
      </Button>
      <Button
        style={{ backgroundColor: "red", fontSize: "20px", width: "100px", height: "40px" }}
        onClick={handleDeleteUser}
        disabled={!selectedUser}
      >
        Delete
      </Button>
      <Button
        style={{ backgroundColor: "blue", fontSize: "20px", width: "100px", height: "40px", marginLeft: "20px"}}
        onClick={handleOpenProfile}
        disabled={!selectedUser}
      >
        Open
      </Button>
    </div>

    {/* Modals */}
    <Modal
        open={addModal}
        onOk={() => setAddModal(false)}
        onCancel={() => setAddModal(false)}
    >
      <Form>
        <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              alignItems: "center",
            }}
        >
          <p>Enter the user name</p>
          <input
              placeholder={"New name"}
              value={addName}
              onChange={(e) => setAddName(e.target.value)}
          />
          <p>Enter the email</p>
          <input
              placeholder={"New email"}
              value={addEmail}
              onChange={(e) => setAddEmail(e.target.value)}
          />
          <p>Enter the password</p>
          <input
              placeholder={"New password"}
              value={addPassword}
              onChange={(e) => setAddPassword(e.target.value)}
          />
          <button
              className="submitedit"
              onClick={() => handleAddUser()}
          >
            Submit
          </button>
        </div>
      </Form>
    </Modal>

    <Modal
        open={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
    >
      <Form>
        <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              alignItems: "center",
            }}
        >
          <p>Enter the new user name</p>
          <input
              placeholder={"New name"}
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
          />
          <p>Enter the new email</p>
          <input
              placeholder={"New email"}
              value={editEMail}
              onChange={(e) => setEditEmail(e.target.value)}
          />
          <p>Enter the new password</p>
          <input
              placeholder={"New password"}
              value={editPassword}
              onChange={(e) => setEditPassword(e.target.value)}
          />
          <button
              className="submitedit"
              onClick={() => handleEditUser(selectedUser._id)}
          >
            Submit
          </button>
        </div>
      </Form>
    </Modal>
  </div>
);
};
export default Admin;

