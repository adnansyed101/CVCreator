/* eslint-disable react/prop-types */
const EduInp = ({ education, setEducation }) => {
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...education];
    list[index][name] = value;
    setEducation(list);
  };

  const addEducation = () => {
    setEducation([
      ...education,
      {
        eduStart: new Date(),
        eduInstitute: "",
        eduEnd: new Date(),
        eduTitle: "",
        eduDesc: "",
      },
    ]);
  };

  const removeEducation = (index) => {
    const list = [...education];
    list.splice(index, 1);
    setEducation(list);
  };

  return (
    <div className="eduInf">
      <fieldset>
        <legend>Educational Information</legend>
        {education.map((data, index) => {
          return (
            <div key={index}>
              <div className="group">
                <p className="control">
                  <label htmlFor="eduStart">Start</label>
                  <input
                    type="date"
                    name="eduStart"
                    className="input"
                    id="eduStart"
                    onChange={(e) => handleChange(e, index)}
                    value={data.eduStart}
                  />
                </p>
                <p className="control">
                  <label htmlFor="eduInstitute">Institute</label>
                  <input
                    type="text"
                    name="eduInstitute"
                    placeholder="BRAC University"
                    className="input"
                    id="eduInstitute"
                    onChange={(e) => handleChange(e, index)}
                    value={data.eduInstitute}
                  />
                </p>
              </div>
              <div className="group">
                <p className="control">
                  <label htmlFor="eduEnd">End</label>
                  <input
                    type="date"
                    name="eduEnd"
                    className="input"
                    id="eduEnd"
                    onChange={(e) => handleChange(e, index)}
                    value={data.eduEnd}
                  />
                </p>
                <p className="control">
                  <label htmlFor="eduTitle">Title</label>
                  <input
                    type="text"
                    name="eduTitle"
                    placeholder="BBA"
                    className="input"
                    id="eduTitle"
                    onChange={(e) => handleChange(e, index)}
                    value={data.eduTitle}
                  />
                </p>
              </div>
              <p className="control">
                <label htmlFor="eduDesc">Describe</label>
                <textarea
                  name="eduDesc"
                  id="eduDesc"
                  placeholder="Give description of course."
                  onChange={(e) => handleChange(e, index)}
                  value={data.eduDesc}
                />
              </p>
              {education.length - 1 === index && (
                <button type="button" className="addBtn" onClick={addEducation}>
                  Add Education
                </button>
              )}
              {education.length !== 1 && (
                <button
                  type="button"
                  className="removeBtn"
                  onClick={() => removeEducation(index)}
                >
                  Remove Education
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

export default EduInp;
