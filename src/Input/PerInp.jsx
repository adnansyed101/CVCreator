/* eslint-disable react/prop-types */
const PerInp = ({ personalInfo, handleChange, handleImgChange }) => {
  const { personalName, address, email, phone, title } = personalInfo;

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
              value={personalName}
            />
          </p>
          <p className="control">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Mohammadpur Dhaka"
              className="input"
              id="address"
              onChange={handleChange}
              value={address}
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
            value={email}
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
            value={phone}
          />
        </p>
        <p className="control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Senior Web Developer"
            className="input"
            id="title"
            onChange={handleChange}
            value={title}
          />
        </p>
        <p className="control">
          <label htmlFor="personImg" className="customInput">
            Choose Image
            <input
              type="file"
              id="personImg"
              onChange={handleImgChange}
              placeholder="Add Image"
            />
          </label>
        </p>
      </fieldset>
    </div>
  );
};

export default PerInp;
