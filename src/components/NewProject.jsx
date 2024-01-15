import { useRef, useState } from "react";
import Input from "./Input";
import Button from "./Button";

export default function NewProject({ addProject, toggleForm }) {
  const [error, setError] = useState(null); // State to manage errors
  const projectName = useRef();
  const projectDesc = useRef();
  const projectDate = useRef();

  function handleSave() {
    if (!projectName.current.value.trim()) {
      setError("Name field cannot be empty.");
      return;
    }

    if (
      projectName.current.value.trim().length < 6 ||
      projectName.current.value.trim().length > 15
    ) {
      setError("Name should be between 6 and 15 characters.");
      return;
    }

    if (!projectDate.current.value) {
      setError("Please select a date.");
      return;
    }

    setError(null); // Validation passed, clear error message

    const newProject = {
      id: Math.random(),
      name: projectName.current.value.trim(),
      desc: projectDesc.current.value.trim(),
      date: projectDate.current.value,
      tasks: []
    };

    addProject(newProject); // Use the addProject function passed as a prop
  }

  return (
    <div className="flex flex-col m-3" style={{ width: "800px" }}>
      {/* <div className="flex flex-col md:w-3/5 m-3 md:ml-0 lg:min-w-[0] mx-auto"> */}
      <menu className="flex gap-3 justify-end p-3 mb-3">
        <Button name={"Cancel"} onClick={() => toggleForm(false)} />
        <Button name={"Save"} onClick={handleSave} />
      </menu>
      <div>
        <Input label={"Project Name"} ref={projectName} type="text" />
        <Input label={"Description"} ref={projectDesc} textarea type="text" />
        <Input label={"Due Date"} ref={projectDate} type="date" />
        {error && <p className="text-red-600">{error}</p>}
      </div>
    </div>
  );
}
