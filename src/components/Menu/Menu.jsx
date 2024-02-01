import PropTypes from "prop-types";
const Menu = ({ item }) => {
  return <></>;
};

Menu.propTypes = {
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

export default Menu;
