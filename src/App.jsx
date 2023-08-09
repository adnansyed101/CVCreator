import PerInp from "./Input/PerInp";
import EduInp from "./Input/EduInp";
import JobInp from "./Input/JobInp";

function App() {
  return (
    <div className="App">
      <div className="form">
        <h1>CV Form</h1>
        <form>
          <PerInp />
          <EduInp />
          <JobInp />
        </form>
      </div>
    </div>
  );
}

export default App;
