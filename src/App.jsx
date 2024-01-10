import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import Homepage from "./components/Homepage";

function App() {
  const [projects, setProjects] = useState([]);
  const [displayForm, setDisplay] = useState(false)

  function handleAddProject(newProject) {
    setProjects(prevProjects => [...prevProjects, newProject]);
  }

  function handleDisplay(toggle) { // add project shows form, cancel button hides, thus parameter is passed with true or false per button
    setDisplay(toggle)
  }

  console.log(projects);
  console.log(displayForm);

  return (
    <main className="h-screen my-2 md:my-8 flex md:gap-8">
    {/* <main className="h-screen my-2 md:my-8 flex flex-col md:flex-row gap-8"> */}
      <Sidebar projects={projects} toggleForm={handleDisplay} />
      {displayForm && <NewProject addProject={handleAddProject} toggleForm={handleDisplay} />}
      {!displayForm && <Homepage />}
    </main>
  );
}

export default App;
