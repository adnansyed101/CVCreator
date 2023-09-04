import PerInp from "./Input/PerInp";
import EduInp from "./Input/EduInp";
import JobInp from "./Input/JobInp";
import { useState } from "react";
import Header from "./Ouput/Header";
import LeftSection from "./Ouput/LeftSection";
import RightSection from "./Ouput/RightSection";

function App() {
  const [personal, setPersonal] = useState({
    personalName: "",
    address: "",
    email: "",
    phone: "",
    title: "",
  });

  const [personImg, setPersonImg] = useState("/placeholder.jpeg");

  const [education, setEducation] = useState([
    {
      eduStart: new Date(),
      eduInstitute: "",
      eduEnd: new Date(),
      eduTitle: "",
      eduDesc: "",
    },
  ]);

  const [job, setJob] = useState([
    {
      jobStart: new Date(),
      jobInstitute: "",
      jobEnd: new Date(),
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
      <div className="CV">
        <h1>CV</h1>
        <div className="CVoutput">
          <Header {...personal} personImg={personImg} />
          <LeftSection education={education} job={job} />
          <RightSection />
        </div>
      </div>
    </div>
  );
}

export default App;
