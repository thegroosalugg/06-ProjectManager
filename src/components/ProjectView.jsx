import { useState, forwardRef } from "react";
import Button from "./Button";

const ProjectView = forwardRef(function ProjectView(
  { project, updateProject },
  ref
) {
  const [error, setError] = useState(null); // State to manage errors

  function handleAddTask() {
    if (!ref.current.value.trim()) {
      setError("Field cannot be empty.");
      return;
    }

    if (
      ref.current.value.trim().length < 6 ||
      ref.current.value.trim().length > 15
    ) {
      setError("Name should be between 6 and 15 characters.");
      return;
    }

    setError(null); // Validation passed, clear error message

    const updatedProject = {
      ...project,
      tasks: [...(project.tasks || []), ref.current.value],
    };

    // Call the parent component's function to update the project in the projects array
    updateProject(updatedProject);
  }

  return (
    <div className="my-20 m-3" style={{ width: "800px" }}>
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl uppercase">{project.name}</h2>
        <Button name={"Delete"} />
      </div>
      <p className="mb-1 text-stone-600">{project.date}</p>
      <p className="overflow-auto break-all my-2 max-h-40">
        {project.desc}
      </p>
      <hr className="my-4 border-t-2 border-gray-500" />
      <h2 className="font-bold my-3 text-2xl">Tasks</h2>
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="border bg-stone-200 my-3 mr-3"
          ref={ref}
        />
        <Button name={"Add Task"} onClick={handleAddTask} />
      </div>
      {error && <p className="text-red-600">{error}</p>}
      <ol className="overflow-auto max-h-50">
        {project.tasks &&
          project.tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
      </ol>
    </div>
  );
});

export default ProjectView
