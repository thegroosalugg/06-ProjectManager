import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";

function App() {
  const [projects, setProjects] = useState([]);

  function handleAddProject(newProject) {
    setProjects(prevProjects => [...prevProjects, newProject]);
  }

  console.log(projects);

  return (
    <main className="h-screen my-2 md:my-8 flex gap-2 md:gap-8">
    {/* <main className="h-screen my-2 md:my-8 flex flex-col md:flex-row gap-8"> */}
      <Sidebar />
      <NewProject addProject={handleAddProject} />
    </main>
  );
}

export default App;
