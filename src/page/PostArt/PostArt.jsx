<<<<<<< Updated upstream
import { Button, Form, Input, Modal, Typography } from "antd";
import { FaPlus } from "react-icons/fa";
import "./PostArt.css";
import { useState } from "react";

const PostArt = () => {
  const [isOpen, setIsOpen] = useState(false)
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
        <Button className="postArtBtn" onClick={()=>{
          setIsOpen(true)
        }}>
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
      title="Tell us about your post"
      open={isOpen}
      onCancel={()=>{setIsOpen(false)}}
      width={1000}
      footer={null}
      >
      <Form>
        <Form.Item label="Something">
          <Input></Input>
        </Form.Item>
      </Form>
      </Modal>
    </div>
  );
=======
import React from 'react';
import './PostArt.css';


const TitleText = () => {
    return (
        <div className = "title__text">
            <h1>Post Art</h1>
            <p>Share your art with the community</p>
        </div>
    );
}

const Form = () => {
    return (
        <div className="form__container">
            <form className="form">
                <label for="artTitle" id="artTitle">Title</label>
                <input type="text" id="artTitle" name="artTitle" required></input>
                <label for="artDescription">Description</label>
                <input type="text" id="artDescription" name="artDescription" required></input>
                <label for="artFile">Upload File</label>
                <input type="file" id="artFile" name="artFile" required></input>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
};

const PostArt = () => {
    return (
        <div>
            <TitleText />
            <Form />
        </div>
    );
>>>>>>> Stashed changes
};

export default PostArt;
