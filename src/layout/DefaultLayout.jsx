import {
  DatabaseOutlined,
  TeamOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Dropdown, Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import PropTypes from "prop-types";
import MenuArthub from "../components/Menu/MenuArthub";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Search from "antd/es/input/Search";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items_welcomepage = [
  getItem("Find Talent", "findtalent", <HomeOutlined />),
  getItem("Our Hub", "ourhub", <TeamOutlined />),
  getItem("Post Your Art", "postart", <DatabaseOutlined />),
];

const DefaultLayout = ({ children }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const navigate = useNavigate();
  const menu = (
    <Menu
      onClick={() => {
        navigate("/home");
      }}
    >
      <Menu.Item key="vercel" icon={<HomeOutlined />}>
        Profile
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <Layout>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <MenuArthub items={items_welcomepage} />
          <div
            style={{
              flex: 0.6,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              size="large"
              type="text"
              onClick={() => {
                navigate("/");
              }}
            >
              <Title
                style={{
                  color: "black",
                  display: "flex",
                  transform: "translateY(-10px)",
                }}
              >
                ARTHUB
              </Title>
            </Button>
            <div style={{ display: "flex" }}>
              <Search
                placeholder="Search"
                allowClear
                style={{ color: "white" }}
              />
            </div>
          </div>
          <Dropdown
            overlay={menu}
            trigger={["click"]}
            visible={menuVisible}
            onVisibleChange={(visible) => setMenuVisible(visible)}
            placement="bottomCenter"
          >
            <Avatar
              style={{
                color: "black",
                backgroundColor: "white",
                verticalAlign: "middle",
                cursor: "pointer",
                border: "1px solid black",
                marginLeft: "30px",
              }}
              size="large"
            >
              a
            </Avatar>
          </Dropdown>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: "white",
          }}
        >
          {children && children}
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          ArtHub ©{new Date().getFullYear()} Created by SWP391
        </Footer>
      </Layout>
    </>
  );
};
DefaultLayout.propTypes = {
  children: PropTypes.node,
};
export default DefaultLayout;
