const Header = ({ personImg, personalName, title }) => {
  return (
    <div className="header">
      <img src={personImg} alt="Avatar" />
      <div className="info">
        <h1>{personalName ? personalName : "John Doe"}</h1>
        <h2>{title ? title : 'Senior Developer'}</h2>
      </div>
    </div>
  );
};

export default Header;
