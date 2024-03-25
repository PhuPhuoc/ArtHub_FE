import {
  DatabaseOutlined,
  TeamOutlined,
  HomeOutlined,
  UserOutlined,
  AreaChartOutlined,
  SettingFilled,
  LogoutOutlined,
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
import logo from "../assets/images/reallogo.png";
import { BsCartCheck } from "react-icons/bs";
import axios from "axios";
import { FaHistory } from "react-icons/fa";

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

  const handleSearchClick = (item) => {
    navigate(`/search/${item}`);
  };

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
          >
            Profile
          </Menu.Item>
          <Menu.Item
            key="order"
            icon={<BsCartCheck />}
            onClick={() => {
              navigate("/orderpage");
            }}
          >
            Your Orders
          </Menu.Item>
          <Menu.Item
            key="history"
            icon={<FaHistory />}
            onClick={() => {
              navigate("/artworkpurchasehistorypage");
            }}
          >
            Artwork Purchase History
          </Menu.Item>
          <SubMenu
            key="setting"
            icon={<SettingOutlined />}
            title="Setting"
            style={{
              fontWeight: "600",
              fontSize: "20px",
              fontFamily: "inherit",
            }}
          >
            <Menu.Item key="security" onClick={() => navigate("/security")}>
              Security
            </Menu.Item>
            <Menu.Item
              key="notification"
              onClick={() => navigate("/notification")}
            >
              Notification
            </Menu.Item>
            <Menu.Item
              key="accountManagement"
              onClick={() => navigate("/accountmanagement")}
            >
              Account management
            </Menu.Item>
            <Menu.Item
              key="privacyAndData"
              onClick={() => navigate("/privacyanddata")}
            >
              Privacy and data
            </Menu.Item>
            <Menu.Item key="editProfile" onClick={() => navigate("/profile")}>
              Edit profile
            </Menu.Item>
            {/* Add more Menu.Item components for other setting options if needed */}
            <div
              className="menuItem"
              style={{
                display: "flex",
                flexDirection: "row",
                fontSize: "10px",
                color: "#c1bbba",
              }}
            >
              <li>
                <a href="">License</a>
              </li>
              <li> .. </li>
              <li>
                <a href="">Privacy policy</a>
              </li>
              <li> .. </li>
              <li>
                <a href="">Term</a>
              </li>
              <li> .. </li>
              <li>
                <a href="">Security</a>
              </li>
            </div>
          </SubMenu>
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
            style={{
              fontWeight: "600",
              fontSize: "15px",
              fontFamily: "inherit",
            }}
          >
            Login
          </Menu.Item>
          <SubMenu
            key="setting"
            icon={<SettingOutlined />}
            title="Setting"
            style={{
              fontWeight: "600",
              fontSize: "20px",
              fontFamily: "inherit",
            }}
          >
            <Menu.Item key="security" onClick={() => navigate("/security")}>
              Security
            </Menu.Item>
            <Menu.Item
              key="notification"
              onClick={() => navigate("/notification")}
            >
              Notification
            </Menu.Item>
            <Menu.Item
              key="accountManagement"
              onClick={() => navigate("/accountmanagement")}
            >
              Account management
            </Menu.Item>
            <Menu.Item
              key="privacyAndData"
              onClick={() => navigate("/privacyanddata")}
            >
              Privacy and data
            </Menu.Item>
            <Menu.Item key="editProfile" onClick={() => navigate("/profile")}>
              Edit profile
            </Menu.Item>
            {/* Add more Menu.Item components for other setting options if needed */}
            <div
              className="menuItem"
              style={{
                marginTop: "10px",
                display: "flex",
                flexDirection: "row",
                fontSize: "10px",
                color: "#c1bbba",
              }}
            >
              <li>
                <a href="">License</a>
              </li>
              <li> .. </li>
              <li>
                <a href="">Privacy policy</a>
              </li>
              <li> .. </li>
              <li>
                <a href="">Term</a>
              </li>
              <li> .. </li>
              <li>
                <a href="">Security</a>
              </li>
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
                onSearch={(text) => handleSearchClick(text)}
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
