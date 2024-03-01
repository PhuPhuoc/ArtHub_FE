import { Menu } from "antd";

import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const MenuArthub = ({ items }) => {
  const navigate = useNavigate();
  const handleMenuClick = ({ key }) => {
    navigate(key);
  };
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      onClick={handleMenuClick}
      //defaultSelectedKeys={["ourhub"]}
      items={items}
      style={{
        flex: 0.5,
        minWidth: 0,
        backgroundColor: "white",
        color: "black",
      }}
    >
      <Menu.Item key={items.key} icon={items.icon}>
        <Link to={items.key}>{items.label}</Link>
      </Menu.Item>
    </Menu>
  );
};

MenuArthub.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          key: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
};

export default MenuArthub;
