import { FaLocationArrow } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";

const RightSection = () => {
  return (
    <div className="rightSection">
      <h1>Contact Me</h1>
      <div className="rightSubInfo">
        <FaLocationArrow style={{ fontSize: "2rem", color: "#ff9d01" }} />
        <div className="rightInfo">
          <h4>Address</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi,
            quae!
          </p>
        </div>
      </div>
      <div className="rightSubInfo">
        <MdEmail style={{ fontSize: "2rem", color: "#ff9d01" }} />
        <div className="rightInfo">
          <h4>Email</h4>
          <p>something@something.com</p>
        </div>
      </div>
      <div className="rightSubInfo">
        <BsFillPhoneFill style={{ fontSize: "2rem", color: "#ff9d01" }} />
        <div className="rightInfo">
          <h4>Phone</h4>
          <p>01725290448</p>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
