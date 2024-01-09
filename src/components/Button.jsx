export default function Button({ name, handleClick }) {
  return (
    <li>
      <button
        className="font-semibold p-3 rounded-xl hover:bg-stone-900 hover:text-stone-50"
        style={{ minWidth: "5rem" }}
        onClick={handleClick}
      >
        {name}{" "}
      </button>
    </li>
  );
}
