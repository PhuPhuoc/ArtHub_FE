import {
  DatabaseOutlined,
  TeamOutlined,
  HomeOutlined,
  UserOutlined,
    LogoutOutlined,
  AreaChartOutlined,
  SettingFilled,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Dropdown, Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import PropTypes from "prop-types";
import MenuArthub from "../components/Menu/MenuArthub";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "antd/es/input/Search";
import Cookies from "js-cookie";

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
  const [sessionCookie, setSessionCookie] = useState("");
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const cookieValue = Cookies.get("sessionCookie");
    console.log("COOKIE", cookieValue);
    if (cookieValue) {
      setSessionCookie(cookieValue);
    }
  }, []);

  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("sessionCookie");
    window.location.href = "/loginpage";
  };
  const menu = (
    <Menu>
      {sessionCookie ? (
        <>
          <Menu.Item
            key="vercel"
            icon={<UserOutlined />}
            onClick={() => {
              navigate("/profile");
            }}
          >
            Profile
          </Menu.Item>
          <Menu.Item
            key="setting"
            icon={<SettingOutlined />}
            onClick={() => navigate("/profile")}
          >
            Setting
          </Menu.Item>
          <Menu.Item
            key="logout"
            icon={<LogoutOutlined />}
            onClick={handleLogout}
          >
            Log out
          </Menu.Item>
        </>
      ) : (
        <>
          <Menu.Item
            key="login"
            icon={<UserOutlined />}
            onClick={() => navigate("/loginpage")}
          >
            Login
          </Menu.Item>
          <Menu.Item
            key="setting"
            icon={<SettingOutlined />}
            onClick={() => navigate("/profile")}
          >
            Setting
          </Menu.Item>
        </>
      )}
    </Menu>
  );
  return (
    <>
      <Layout>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1000,
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
                  transform: "translateY(-20px)",
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
              <UserOutlined />
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
