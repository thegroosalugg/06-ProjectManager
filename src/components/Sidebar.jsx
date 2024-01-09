export default function Sidebar({ projects }) {
  return (
    <aside id="sidebar">
      <h2 className="md:text-xl uppercase font-bold mt-4">Projects</h2>
      <div className="my-5">
        <button className="text-xxs md:text-base px-4 py-2 rounded-md bg-stone-700 text-stone-300 hover:bg-stone-600 hover:text-stone-100">
          + Add Project
        </button>
      </div>
      <ul className="mt-3 max-h-32 overflow-auto">
        {projects.map((project, index) => (
          <li key={`${index} ${project.name}`}>
            <button className="p-1 my-1 text-sm uppercase hover:text-stone-500">{project.name}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
