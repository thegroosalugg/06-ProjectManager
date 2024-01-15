import { useState, useRef } from "react";
import Button from "./Button";

export default function ProjectView({ project, updateProject }) {
  const newTask = useRef();
  const [error, setError] = useState(null); // State to manage errors

  function handleAddTask() {
    if (!newTask.current.value.trim()) {
      setError("Field cannot be empty.");
      return;
    }

    if (
      newTask.current.value.trim().length < 6 ||
      newTask.current.value.trim().length > 30
    ) {
      setError("Task should be between 6 and 30 characters.");
      return;
    }

    setError(null); // Validation passed, clear error message

    const updatedProject = {
      ...project,
      tasks: [newTask.current.value, ...project.tasks],
    };

    // Call the parent component's function to update the project in the projects array
    updateProject(updatedProject);
    newTask.current.value = "";
  }

  function handleDeleteTask({ project, task }) {}

  return (
    <div className="my-20 m-3" style={{ width: "800px" }}>
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl uppercase">{project.name}</h2>
        <Button name={"Delete"} />
      </div>
      <p className="mb-1 text-stone-600">{project.date}</p>
      <p className="overflow-auto break-all my-2 max-h-40">{project.desc}</p>
      <hr className="my-4 border-t-2 border-gray-500" />
      <h2 className="font-bold my-3 text-2xl">Tasks</h2>
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="border bg-stone-200 my-3 mr-3 w-80"
          ref={newTask}
        />
        <Button name={"Add Task"} onClick={handleAddTask} />
      </div>
      {error && <p className="text-red-600">{error}</p>}
      <ol className="overflow-auto max-h-60 w-80 p-4 mt-8 rounded-md bg-stone-200">
        {project.tasks.map((task, index) => (
          <li key={index} className="flex justify-between my-1">
            <p>{task}</p>
            <button
              className="font-bold text-stone-700 hover:text-stone-100"
              onClick={() => handleDeleteTask({ project, task })}
            >
              ✕
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
