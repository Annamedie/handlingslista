interface Props {
  checked: boolean;
  onChange: () => void;
}

function Checkbox({ checked, onChange }: Props) {
  return (
    <input
      type="checkbox"
      className="checkbox"
      checked={checked}
      onChange={onChange}
    />
  );
}
export default Checkbox;
