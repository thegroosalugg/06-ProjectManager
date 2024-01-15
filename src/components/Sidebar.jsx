export default function Sidebar({ projects, toggleForm, onProjectClick }) {
  return (
    <aside id="sidebar">
      <h2 className="text-xs md:text-2xl uppercase font-bold md:mt-4">
        Projects
      </h2>
      <div className="md:mt-5 mb-2">
        <button
          className="text-xxs md:text-base p-1 md:px-4 md:py-2 rounded-md bg-stone-700 text-stone-300 hover:bg-stone-600 hover:text-stone-100"
          onClick={() => toggleForm(true)}
        >
          + Add Project
        </button>
      </div>
      <ul className="md:mt-3 max-h-60 overflow-auto">
        {projects.map((project, index) => (
          <li key={project.id}>
            <button
              className="md:p-1 md:mb-1 text-xs md:text-lg hover:text-stone-500"
              onClick={() => onProjectClick(project)}
            >
              {project.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
