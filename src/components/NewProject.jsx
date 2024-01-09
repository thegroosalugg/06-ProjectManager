import Input from "./Input";
import Button from "./Button";

export default function NewProject() {
  return (
    <div className="flex flex-col md:w-3/5 m-3">
      {/* <div className="flex flex-col md:w-3/5 m-3 md:ml-0 lg:min-w-[0] mx-auto"> */}
      <menu className="flex gap-3 justify-end p-3 mb-3">
        <Button name={"Cancel"} />
        <Button name={"Save"} />
      </menu>
      <div>
        <Input label={"Project Name"} type="text" />
        <Input label={"Description"} textarea type="text" />
        <Input label={"Due Date"} type="date" />
      </div>
    </div>
  );
}
