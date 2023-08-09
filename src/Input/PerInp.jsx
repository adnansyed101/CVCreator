const PerInp = () => {
  return (
    <div className="perInf">
      <fieldset>
        <legend>Personal Information</legend>
        <div className="group">
          <p className="control">
            <label htmlFor="fName">Name</label>
            <input
              type="text"
              name=""
              placeholder="John Doe"
              className="input"
              id="fName"
            />
          </p>
          <p className="control">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              name=""
              placeholder="18"
              className="input"
              id="age"
            />
          </p>
        </div>
        <p className="control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name=""
            placeholder="something@something.com"
            className="input"
            id="email"
          />
        </p>
        <p className="control">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name=""
            placeholder="0172*******"
            className="input"
            id="phone"
          />
        </p>
      </fieldset>
    </div>
  );
};

export default PerInp;
