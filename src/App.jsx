import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import Homepage from "./components/Homepage";
import ProjectView from "./components/ProjectView";

function App() {
  const [projects, setProjects] = useState([]);
  const [displayForm, setDisplay] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null);

  function handleAddProject(newProject) {
    setProjects(prevProjects => [...prevProjects, newProject]);
  }

  function handleDisplay(toggle) { // add project shows form, cancel button hides, thus parameter is passed with true or false per button
    setDisplay(toggle)
    setSelectedProject(null)
  }

  function handleProjectClick(project) {
    setDisplay(false)
    setSelectedProject(project);
  }

  console.log("Projects Array", projects);
  console.log("Form Display:", displayForm);
  console.log("Selected Project:", selectedProject);

  return (
    <main className="h-screen my-2 md:my-8 flex md:gap-8">
    {/* <main className="h-screen my-2 md:my-8 flex flex-col md:flex-row gap-8"> */}
      <Sidebar projects={projects} toggleForm={handleDisplay} onProjectClick={handleProjectClick} />
      {displayForm && <NewProject addProject={handleAddProject} toggleForm={handleDisplay} />}
      {(!displayForm && !selectedProject) && <Homepage />}
      {selectedProject && <ProjectView {...selectedProject} />}
    </main>
  );
}

export default App;
