export default function Sidebar() {
  return (
    <aside id="sidebar">
      <h2 className="md:text-xl uppercase font-bold my-4">Projects</h2>
      <div className="my-5">
        <button className="text-xxs md:text-base px-4 py-2 rounded-md bg-stone-700 text-stone-300 hover:bg-stone-600 hover:text-stone-100">
          + Add Project
        </button>
      </div>
      <ul></ul>
    </aside>
  );
}
