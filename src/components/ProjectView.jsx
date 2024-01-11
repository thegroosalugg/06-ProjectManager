export default function ProjectView({ name, desc, date }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{desc}</p>
      <p>{date}</p>
    </div>
  );
}
