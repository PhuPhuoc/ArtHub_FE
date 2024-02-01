import {
  DatabaseOutlined,
  TeamOutlined,
  HomeOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import PropTypes from "prop-types";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items_WelcomePage = [
  getItem("Dashboard", "dashboard", <HomeOutlined />),
  getItem("Collaborators & Teams", "collaborators", <TeamOutlined />),
  getItem("Manager Zone", "management", <DatabaseOutlined />),
  getItem("My Task", "task", <SolutionOutlined />),
];

const DefaultLayout = ({ children }) => {
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
          }}
        >
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items_WelcomePage}
            style={{
              flex: 1,
              minWidth: 0,
            }}
          ></Menu>
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
