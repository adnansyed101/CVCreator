import { format } from "date-fns";
import PerInp from "./Input/PerInp";
import EduInp from "./Input/EduInp";
import JobInp from "./Input/JobInp";
import { useState } from "react";
import SkillInp from "./Input/SkillInp";
import CVOutput from "./Ouput/CVOutput";

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
      eduStart: format(new Date(), "yyyy-MM-dd"),
      eduInstitute: "",
      eduEnd: format(new Date(), "yyyy-MM-dd"),
      eduTitle: "",
      eduDesc: "",
    },
  ]);

  const [job, setJob] = useState([
    {
      jobStart: format(new Date(), "yyyy-MM-dd"),
      jobInstitute: "",
      jobEnd: format(new Date(), "yyyy-MM-dd"),
      jobTitle: "",
      jobDesc: "",
    },
  ]);

  const [skills, setSkills] = useState([
    {
      skill: "",
      progress: "",
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
          <SkillInp skills={skills} setSkills={setSkills} />
        </form>
      </div>
      <CVOutput
        personal={personal}
        personImg={personImg}
        education={education}
        job={job}
        skills={skills}
      />
    </div>
  );
}

export default App;
