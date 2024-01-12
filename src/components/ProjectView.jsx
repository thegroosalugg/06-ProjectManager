export default function ProjectView({ name, desc, date }) {
  return (
    <div className="my-20 md:w-3/5 m-3">
      <span className="flex justify-between">
        <h2 className="font-bold text-2xl uppercase">{name}</h2>
        <button className="font-semibold py-1 px-2 rounded-xl hover:bg-stone-900 hover:text-stone-50">
          Delete
        </button>
      </span>
      <p className="mb-1">{date}</p>
      <p className="overflow-auto break-all my-2 max-h-20">{desc}</p>
      <hr className="my-4 border-t-2 border-gray-500" />
      <h2>Tasks</h2>
      <span>
        <input type="text" />
        <button className="font-semibold py-1 px-2 rounded-xl hover:bg-stone-900 hover:text-stone-50 ml-3">
          Add Task
        </button>
      </span>
      <ol className="overflow-auto max-h-50">
        <li>Task</li>
      </ol>
    </div>
  );
}
