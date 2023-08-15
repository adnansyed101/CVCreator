const EduInp = () => {
  return (
    <div className="eduInf">
      <fieldset>
        <legend>Educational Information</legend>
        <div className="group">
          <p className="control">
            <label htmlFor="eduStart">Start</label>
            <input
              type="date"
              // name="personalName"
              className="input"
              id="eduStart"
              // onChange={handleChange}
            />
          </p>
          <p className="control">
            <label htmlFor="age">Institute</label>
            <input
              type="text"
              name="eduInstitute"
              placeholder="BRAC University"
              className="input"
              id="age"
              // onChange={handleChange}
            />
          </p>
        </div>
        <div className="group">
          <p className="control">
            <label htmlFor="eduEnd">End</label>
            <input
              type="date"
              // name="personalName"
              className="input"
              id="eduStart"
              // onChange={handleChange}
            />
          </p>
          <p className="control">
            <label htmlFor="age">Title</label>
            <input
              type="text"
              name="eduTitle"
              placeholder="BBA"
              className="input"
              id="age"
              // onChange={handleChange}
            />
          </p>
        </div>
        <p className="control">
          <label htmlFor="eduDesc">Describe</label>
          <textarea name="eduDesc" id="EduDesc" />
        </p>
        <button type="button" className="addBtn">
          Add Education
        </button>
        <button type="button" className="removeBtn">
          Remove Education
        </button>
        <hr />
      </fieldset>
    </div>
  );
};

export default EduInp;
