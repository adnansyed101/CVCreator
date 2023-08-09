const PerInp = () => {
  return (
    <div className="perInf">
      <fieldset>
        <legend>Personal Information</legend>
        <div className="group">
          <label htmlFor="fName">Name: </label>
          <input
            type="text"
            name=""
            placeholder="John Doe"
            className="input"
            id="fName"
          />
          <label htmlFor="age">Age: </label>
          <input
            type="text"
            name=""
            placeholder="18"
            className="input"
            id="age"
          />
        </div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name=""
          placeholder="something@something.com"
          className="input"
          id="email"
        />
        <label htmlFor="phone">Phone: </label>
        <input
          type="text"
          name=""
          placeholder="0172******"
          className="input"
          id="phone"
        />
      </fieldset>
    </div>
  );
};

export default PerInp;
