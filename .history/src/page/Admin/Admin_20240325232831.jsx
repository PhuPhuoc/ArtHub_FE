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
          .then
