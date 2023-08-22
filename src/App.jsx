import PerInp from "./Input/PerInp";
import EduInp from "./Input/EduInp";
import JobInp from "./Input/JobInp";
import { useState } from "react";

function App() {
  const [personal, setPersonal] = useState({
    personalName: "",
    age: "",
    email: "",
    phone: "",
    title: "",
  });

  const [personImg, setPersonImg] = useState();

  const [education, setEducation] = useState([
    {
      eduStart: "",
      eduInstitute: "",
      eduEnd: "",
      eduTitle: "",
      eduDesc: "",
    },
  ]);

  const [job, setJob] = useState([
    {
      jobStart: "",
      jobInstitute: "",
      jobEnd: "",
      jobTitle: "",
      jobDesc: "",
    },
  ]);

  const handlePersonalChange = (e) => {
    setPersonal((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleImgChange = (e) => {
    setPersonImg(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="App">
      <div className="form">
        <h1>CV Form</h1>
        <form>
          <PerInp
            personalInfo={personal}
            handleChange={handlePersonalChange}
            handleImgChange={handleImgChange}
          />
          <EduInp education={education} setEducation={setEducation} />
          <JobInp job={job} setJob={setJob} />
        </form>
      </div>
      <div className="CV"></div>
    </div>
  );
}

export default App;
