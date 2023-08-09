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
  });

  const handlePersonalChange = (e) => {
    setPersonal((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className="App">
      <div className="form">
        <h1>CV Form</h1>
        <form>
          <PerInp handleChange={handlePersonalChange} />
          <EduInp />
          <JobInp />
        </form>
      </div>
    </div>
  );
}

export default App;
