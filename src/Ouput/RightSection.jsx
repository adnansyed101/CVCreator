/* eslint-disable react/prop-types */
const RightSection = ({ personImg }) => {
  return (
    <div className="rightSection">
      <figure className="imgDiv">
        <img src={personImg} alt="Avatar" />
      </figure>
    </div>
  );
};

export default RightSection;
