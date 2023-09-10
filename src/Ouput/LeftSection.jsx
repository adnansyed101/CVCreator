import PropTypes from "prop-types";
import EduOut from "./EduOut";
import JobOut from "./JobOut";

const LeftSection = ({ education, job }) => {
  const eduOutElement = education.map((item, index) => {
    return <EduOut {...item} key={index} />;
  });

  const jobOutElement = job.map((item, index) => {
    return <JobOut {...item} key={index} />;
  });

  return (
    <div className="leftSection">
      <div className="leftHeader">EDUCATION</div>
      <div style={{ marginBottom: "5rem" }}>{eduOutElement}</div>
      <div className="leftHeader">Experience</div>
      <div style={{ marginBottom: "5rem" }}>{jobOutElement}</div>
    </div>
  );
};

LeftSection.propTypes = {
  education: PropTypes.array,
  job: PropTypes.array,
};

export default LeftSection;
