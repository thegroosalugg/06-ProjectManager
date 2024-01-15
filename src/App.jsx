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
    handleProjectClick(newProject) // saving form will directly go to the new project view
  }

  function handleDisplay(toggle) { // add project shows form, cancel button hides, thus parameter is passed with true or false per button
    setDisplay(toggle)
    setSelectedProject(null) // when adding a new project, selected project is cleared
  }

  function handleProjectClick(project) {
    setDisplay(false) // when called, form display set to false which will deactivate the form and home pages
    setSelectedProject(project);
  }

  function handleUpdateProject(updatedProject) {
    setProjects((prevProjects) =>
      prevProjects.map((proj) =>
        proj.id === updatedProject.id ? updatedProject : proj
      )
    );
    setSelectedProject(updatedProject);
  }

  console.log("Projects Array", projects);
  console.log("Form Display:", displayForm);
  console.log("Selected Project:", selectedProject);

  return (
    <main className="h-screen flex md:gap-8">
    {/* <main className="h-screen my-2 md:my-8 flex flex-col md:flex-row gap-8"> */}
      <Sidebar projects={projects} toggleForm={handleDisplay} onProjectClick={handleProjectClick} />
      {displayForm && <NewProject addProject={handleAddProject} toggleForm={handleDisplay} />}
      {(!displayForm && !selectedProject) && <Homepage />}
      {selectedProject && <ProjectView project={selectedProject} updateProject={handleUpdateProject} />}
    </main>
  );
}

export default App;
