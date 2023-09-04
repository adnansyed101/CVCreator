/* eslint-disable react/prop-types */
const JobInp = ({ job, setJob }) => {
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...job];
    list[index][name] = value;
    setJob(list);
  };

  const addJob = () => {
    setJob([
      ...job,
      {
        jobStart: new Date(),
        jobInstitute: "",
        jobEnd: new Date(),
        jobTitle: "",
        jobDesc: "",
      },
    ]);
  };

  const removeJob = (index) => {
    const list = [...job];
    list.splice(index, 1);
    setJob(list);
  };

  return (
    <div className="eduInf">
      <fieldset>
        <legend>Job Information</legend>
        {job.map((data, index) => {
          return (
            <div key={index}>
              <div className="group">
                <p className="control">
                  <label htmlFor="jobStart">Start</label>
                  <input
                    type="date"
                    name="jobStart"
                    className="input"
                    id="jobStart"
                    onChange={(e) => handleChange(e, index)}
                    value={data.jobStart}
                  />
                </p>
                <p className="control">
                  <label htmlFor="jobInstitute">Institute</label>
                  <input
                    type="text"
                    name="jobInstitute"
                    placeholder="ABC Company"
                    className="input"
                    id="jobInstitute"
                    onChange={(e) => handleChange(e, index)}
                    value={data.jobInstitute}
                  />
                </p>
              </div>
              <div className="group">
                <p className="control">
                  <label htmlFor="jobEnd">End</label>
                  <input
                    type="date"
                    name="jobEnd"
                    className="input"
                    id="jobEnd"
                    onChange={(e) => handleChange(e, index)}
                    value={data.jobEnd}
                  />
                </p>
                <p className="control">
                  <label htmlFor="jobTitle">Title</label>
                  <input
                    type="text"
                    name="jobTitle"
                    placeholder="Senior Developer"
                    className="input"
                    id="jobTitle"
                    onChange={(e) => handleChange(e, index)}
                    value={data.jobTitle}
                  />
                </p>
              </div>
              <p className="control">
                <label htmlFor="jobDesc">Describe</label>
                <textarea
                  name="jobDesc"
                  id="jobDesc"
                  placeholder="Give description of Job."
                  onChange={(e) => handleChange(e, index)}
                  value={data.jobDesc}
                />
              </p>
              {job.length - 1 === index && (
                <button type="button" className="addBtn" onClick={addJob}>
                  Add Job
                </button>
              )}
              {job.length !== 1 && (
                <button
                  type="button"
                  className="removeBtn"
                  onClick={() => removeJob(index)}
                >
                  Remove Job
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

export default JobInp;
