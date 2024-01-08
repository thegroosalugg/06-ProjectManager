import Input from "./Input";

export default function NewProject() {
  return (
    <div className="flex flex-col md:w-3/5 m-3">
      <menu className="flex gap-3 justify-end p-3 mb-3">
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button>Save</button>
        </li>
      </menu>
      <div>
        <Input label={"Project Name"} type="text" />
        <Input label={"Description"} textarea type="text" />
        <Input label={"Due Date"} type="date" />
      </div>
    </div>
  );
}
