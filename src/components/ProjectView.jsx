import Button from "./Button";

export default function ProjectView({ name, desc, date }) {
  return (
    <div className="my-20 w-3/5 m-3">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl uppercase">{name}</h2>
        <Button name={'Delete'} />
      </div>
      <p className="mb-1 text-stone-600">{date}</p>
      <p className="overflow-auto break-all my-2 max-h-40">{desc}</p>
      <hr className="my-4 border-t-2 border-gray-500" />
      <h2 className="font-bold my-3 text-2xl">Tasks</h2>
      <div className="flex items-center gap-4">
        <input type="text" className="border bg-stone-200 my-3 mr-3" />
        <Button name={'Add Task'} />
      </div>
      <ol className="overflow-auto max-h-50">
        <li>Task</li>
      </ol>
    </div>
  );
}
