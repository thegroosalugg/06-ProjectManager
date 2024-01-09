import { useRef } from "react";
import Input from "./Input";
import Button from "./Button";

export default function NewProject({ addProject }) {
  const projectName = useRef();
  const projectDesc = useRef();
  const projectDate = useRef();

  let newProject;

  function handleSave() {
    newProject = {
      name: projectName.current.value,
      desc: projectDesc.current.value,
      date: projectDate.current.value,
    };
    addProject(newProject);
  }

  return (
    <div className="flex flex-col md:w-3/5 m-3">
      {/* <div className="flex flex-col md:w-3/5 m-3 md:ml-0 lg:min-w-[0] mx-auto"> */}
      <menu className="flex gap-3 justify-end p-3 mb-3">
        <Button name={"Cancel"} />
        <Button name={"Save"} handleClick={handleSave} />
      </menu>
      <div>
        <Input label={"Project Name"} ref={projectName} type="text" />
        <Input label={"Description"} ref={projectDesc} textarea type="text" />
        <Input label={"Due Date"} ref={projectDate} type="date" />
      </div>
    </div>
  );
}
