export default function Input({ textarea, label, ...props }) {
  const classes = "border bg-stone-200 p-2 rounded-lg";
  const Element = textarea ? 'textarea' : 'input';

  return (
    <p className="flex flex-col">
      <label className="mt-3 mb-2 font-bold">{label}</label>
      <Element className={classes} {...props} />
    </p>
  );
}
