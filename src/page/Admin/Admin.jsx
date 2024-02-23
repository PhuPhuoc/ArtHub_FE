import React from "react";
import { Button, Space, Table, Tag, Typography } from "antd";
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
    dataIndex: "imageURL",
    render: (imageURL) => (
      <img
        src={imageURL}
        alt="User"
        style={{ maxWidth: "100px", maxHeight: "100px" }}
      />
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    email: "JohnBrown123@gmail.com",
    birthday: "10/2/2010",
    gender: "male",
    tags: ["developer", "nice"],
    avatarUrl: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
    imageURL:
      "https://images.unsplash.com/photo-1575718120842-54e388d8cc6f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    key: "2",
    name: "Jim Green",
    email: "JimGreen456@gmail.com",
    birthday: "13/12/2009",
    gender: "female",
    tags: ["user"],
    avatarUrl: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
    imageURL:
      "https://images.unsplash.com/photo-1551817958-20204d6ab212?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    key: "3",
    name: "Joe Black",
    email: "JoeBlack789@gmail.com",
    birthday: "1/3/2008",
    gender: "I don't know",
    tags: ["Creator"],
    avatarUrl: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
    imageURL:
      "https://images.unsplash.com/photo-1615494488092-b13b68fe0eb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const Admin = () => {
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
    </div>
  );
};
export default Admin;
