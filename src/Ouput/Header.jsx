import PropTypes from "prop-types";

const Header = ({ personImg, personalName, title }) => {
  return (
    <div className="header">
      <img src={personImg} alt="Avatar" />
      <div className="info">
        <h1>{personalName ? personalName : "John Doe"}</h1>
        <h2>{title ? title : "Senior Developer"}</h2>
      </div>
    </div>
  );
};

Header.propTypes = {
  personImg: PropTypes.string,
  personalName: PropTypes.string,
  title: PropTypes.string,
};

export default Header;
