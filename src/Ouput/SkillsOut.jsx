import PropTypes from "prop-types";

const SkillsOut = ({ skill, progress }) => {
  return (
    <div className="skills">
      {skill && <h3>{skill}</h3>}
      {progress && (
        <div className="skillProgress">
          <div className="bar" style={{ width: `${progress}%` }}></div>
        </div>
      )}
    </div>
  );
};

SkillsOut.propTypes = {
  skill: PropTypes.string,
  progress: PropTypes.string,
};

export default SkillsOut;
