import PropTypes from "prop-types";

const SkillInp = ({ skills, setSkills }) => {
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...skills];
    list[index][name] = value;
    setSkills(list);
  };

  const addJob = () => {
    setSkills([
      ...skills,
      {
        skill: "",
        progress: "",
      },
    ]);
  };

  const removeJob = (index) => {
    const list = [...skills];
    list.splice(index, 1);
    setSkills(list);
  };

  return (
    <div className="skillsInf">
      <fieldset>
        <legend>Skills</legend>
        {skills.map((data, index) => {
          return (
            <div key={index}>
              <div className="group">
                <p className="control">
                  <label htmlFor="skill">Skill</label>
                  <input
                    type="text"
                    name="skill"
                    className="input"
                    id="skill"
                    onChange={(e) => handleChange(e, index)}
                    value={data.skill}
                    placeholder="Javascript"
                  />
                </p>
                <p className="control">
                  <label htmlFor="progress">Progress</label>
                  <input
                    type="number"
                    name="progress"
                    placeholder="70"
                    className="input"
                    min={1}
                    max={100}
                    id="progress"
                    onChange={(e) => handleChange(e, index)}
                    value={data.progress}
                  />
                </p>
              </div>
              {skills.length - 1 === index && (
                <button type="button" className="addBtn" onClick={addJob}>
                  Add Skill
                </button>
              )}
              {skills.length !== 1 && (
                <button
                  type="button"
                  className="removeBtn"
                  onClick={() => removeJob(index)}
                >
                  Remove Skill
                </button>
              )}
              <hr />
            </div>
          );
        })}
      </fieldset>
    </div>
  );
};

SkillInp.propTypes = {
  skills: PropTypes.array,
  setSkills: PropTypes.func,
};

export default SkillInp;
