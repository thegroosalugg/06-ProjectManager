import Input from "./Input";

export default function NewProject() {
  return (
    <div>
      <menu>
        <li>
          <button>cancel</button>
        </li>
        <li>
          <button>save</button>
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
