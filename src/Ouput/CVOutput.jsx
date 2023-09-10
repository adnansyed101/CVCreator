import PropTypes from "prop-types";
import Header from "./Header";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const CVOutput = ({ personal, personImg, education, job, skills }) => {
  return (
    <div className="CV">
      <h1>CV</h1>
      <div className="CVoutput">
        <Header {...personal} personImg={personImg} />
        <LeftSection education={education} job={job} />
        <RightSection {...personal} skills={skills} />
      </div>
    </div>
  );
};

CVOutput.propTypes = {
  personal: PropTypes.object,
  personImg: PropTypes.string,
  education: PropTypes.array,
  job: PropTypes.array,
  skills: PropTypes.array,
};

export default CVOutput;
