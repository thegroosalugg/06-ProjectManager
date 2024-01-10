import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";

function App() {
  const [projects, setProjects] = useState([]);
  const [displayForm, setDisplay] = useState(false)

  function handleAddProject(newProject) {
    setProjects(prevProjects => [...prevProjects, newProject]);
  }

  function handleDisplay() {
    setDisplay(true)
  }

  console.log(projects);
  console.log(displayForm);

  return (
    <main className="h-screen my-2 md:my-8 flex gap-2 md:gap-8">
    {/* <main className="h-screen my-2 md:my-8 flex flex-col md:flex-row gap-8"> */}
      <Sidebar projects={projects} addProject={handleDisplay} />
      {displayForm && <NewProject addProject={handleAddProject} />}
    </main>
  );
}

export default App;
