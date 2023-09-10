import PropTypes from "prop-types";
import { FaLocationArrow } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";
import SkillsOut from "./SkillsOut";

const RightSection = ({ address, email, phone, skills }) => {
  const skillsOutElement = skills.map((data, index) => {
    return <SkillsOut {...data} key={index} />;
  });

  return (
    <div className="rightSection">
      <h1>Contact Me</h1>
      <div className="rightSubInfo">
        <FaLocationArrow style={{ fontSize: "2rem", color: "#ff9d01" }} />
        <div className="rightInfo">
          <h4>Address</h4>
          <p>{address ? address : "123, Street Oclaho, New York City, USA"}</p>
        </div>
      </div>
      <div className="rightSubInfo">
        <MdEmail style={{ fontSize: "2rem", color: "#ff9d01" }} />
        <div className="rightInfo">
          <h4>Email</h4>
          <p>{email ? email : "johnDoe123@placeholder.com"}</p>
        </div>
      </div>
      <div className="rightSubInfo">
        <BsFillPhoneFill style={{ fontSize: "2rem", color: "#ff9d01" }} />
        <div className="rightInfo">
          <h4>Phone</h4>
          <p>{phone ? phone : "01700000000"}</p>
        </div>
      </div>
      <h1>Pro Skills</h1>
      {skillsOutElement}
    </div>
  );
};

RightSection.propTypes = {
  address: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  skills: PropTypes.array,
};

export default RightSection;
