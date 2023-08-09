/* eslint-disable react/prop-types */
const PerInp = ({ handleChange }) => {
  return (
    <div className="perInf">
      <fieldset>
        <legend>Personal Information</legend>
        <div className="group">
          <p className="control">
            <label htmlFor="fName">Name</label>
            <input
              type="text"
              name="personalName"
              placeholder="John Doe"
              className="input"
              id="fName"
              onChange={handleChange}
            />
          </p>
          <p className="control">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              name="age"
              placeholder="18"
              className="input"
              id="age"
              onChange={handleChange}
            />
          </p>
        </div>
        <p className="control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="something@something.com"
            className="input"
            id="email"
            onChange={handleChange}
          />
        </p>
        <p className="control">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="0172*******"
            className="input"
            id="phone"
            onChange={handleChange}
          />
        </p>
      </fieldset>
    </div>
  );
};

export default PerInp;
