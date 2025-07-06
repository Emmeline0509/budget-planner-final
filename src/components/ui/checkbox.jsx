export function Checkbox({ id, checked, onCheckedChange }) {
  return (
    <input
      id={id}
      type="checkbox"
      checked={checked}
      onChange={onCheckedChange}
      className="mr-2"
    />
  );
}