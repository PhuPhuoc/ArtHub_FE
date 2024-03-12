import {
  DatabaseOutlined,
  TeamOutlined,
  HomeOutlined,
  UserOutlined,
  AreaChartOutlined,
  SettingFilled,
  LogoutOutlined,
  SettingOutlined 
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
import logo from "../assets/images/reallogo.png";

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
  const { SubMenu } = Menu;
  const menu = (
    <Menu style={{ width: "300px" }}>
      {sessionCookie ? (
        <>
          <Menu.Item
            key="vercel"
            icon={<UserOutlined />}
            onClick={() => {
              navigate("/profile");
            }}
            style={{ fontWeight: "600px", fontSize: "20px", fontFamily: "inherit" }}
          >
            Profile
          </Menu.Item>
          <SubMenu
            key="setting"
            icon={<SettingOutlined />}
            title="setting"
            style={{ fontWeight: "600px", fontSize: "20px", fontFamily: "inherit" }}
          >
            <Menu.Item
              key="security"
              onClick={() => navigate("/security")}
              style={{ fontWeight: "600px", fontSize: "20px", fontFamily: "inherit" }}
            >
              security
            </Menu.Item>
            <Menu.Item
              key="Notification"
              onClick={() => navigate("/notification")}
              style={{ fontWeight: "600px", fontSize: "20px", fontFamily: "inherit" }}
            >
              Notification
            </Menu.Item>
            <Menu.Item
              key="Privacy and data"
              onClick={() => navigate("/privacyanddata")}
              style={{ fontWeight: "600px", fontSize: "20px", fontFamily: "inherit" }}
            >
              Privacy and data
            </Menu.Item>
            <Menu.Item
              key="Edit profile"
              onClick={() => navigate("/profile")}
              style={{ fontWeight: "600px", fontSize: "20px", fontFamily: "inherit" }}
            >
              Edit profile
            </Menu.Item>
            {/* Add more Menu.Item components for other setting options if needed */}
            <div className="menuItem" style={{ display: "flex", flexDirection: "row", fontSize: "10px", color: "#c1bbba" }}>
              <li><a href="">License</a></li>
              <li> .. </li>
              <li><a href="">Privacy policy</a></li>
              <li> .. </li>
              <li><a href="">Term</a></li>
              <li> .. </li>
              <li><a href="">Security</a></li>
            </div>
          </SubMenu>
          <Menu.Item
            key="logout"
            icon={<LogoutOutlined />}
            onClick={handleLogout}
            style={{ fontWeight: "600px", fontSize: "20px", fontFamily: "inherit" }}
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
            style={{ fontWeight: "600px", fontSize: "15px", fontFamily: "inherit" }}
          >
            Login
          </Menu.Item>
          <SubMenu
            key="setting"
            icon={<SettingOutlined />}
            title="Setting"
            style={{ fontWeight: "600px", fontSize: "20px", fontFamily: "inherit" }}
          >
            <Menu.Item
              key="Security"
              onClick={() => navigate("/security")}
              style={{ fontWeight: "600px", fontSize: "20px", fontFamily: "inherit" }}
            >
              Security
            </Menu.Item>
            <Menu.Item
              key="Notification"
              onClick={() => navigate("/notification")}
              style={{ fontWeight: "600px", fontSize: "20px", fontFamily: "inherit" }}
            >
              Notification
            </Menu.Item>
          
            <Menu.Item
              key="Privacyanddata"
              onClick={() => navigate("/privacyanddata")}
              style={{ fontWeight: "600px", fontSize: "20px", fontFamily: "inherit" }}
            >
              Privacy and data
            </Menu.Item>
            <Menu.Item
              key="Editprofile"
              onClick={() => navigate("/profile")}
              style={{ fontWeight: "600px", fontSize: "20px", fontFamily: "inherit" }}
            >
              Edit profile
            </Menu.Item>
            {/* Add more Menu.Item components for other setting options if needed */}
            <div className="menuItem" style={{ display: "flex", flexDirection: "row", fontSize: "10px", color: "#c1bbba" }}>
              <li><a href="">License</a></li>
              <li> .. </li>
              <li><a href="">Privacy policy</a></li>
              <li> .. </li>
              <li><a href="">Term</a></li>
              <li> .. </li>
              <li><a href="">Security</a></li>
            </div>
          </SubMenu>
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
            <img
              className="logoImage"
              style={{
                width: "250px",
                height: "230px",
                display: "block",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/");
              }}
              src={logo}
            />

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
