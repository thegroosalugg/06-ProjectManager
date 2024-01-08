export default function Button({ name }) {
  return (
    <li>
      <button className="font-semibold p-3 rounded-xl hover:bg-stone-900 hover:text-stone-50"
      style={{ minWidth: '5rem' }}>{name}</button>
    </li>
  );
}
