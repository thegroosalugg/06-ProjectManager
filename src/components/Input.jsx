export default function Input({ textarea, label, ...props }) {
  return (
    <p className="flex flex-col">
      <label className="mt-3 mb-2 font-bold">{label}</label>
      {textarea ? <textarea {...props} /> : <input {...props} />}
    </p>
  );
}
