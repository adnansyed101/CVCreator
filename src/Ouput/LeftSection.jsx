/* eslint-disable react/prop-types */
const LeftSection = ({ personalName, address, email, phone, title }) => {
  return (
    <div className="leftSection">
      <div className="header">
        <h1>{personalName ? personalName : "John Doe"}</h1>
        <h2>{title ? title : "Senior Developer"}</h2>
      </div>
    </div>
  );
};

export default LeftSection;
