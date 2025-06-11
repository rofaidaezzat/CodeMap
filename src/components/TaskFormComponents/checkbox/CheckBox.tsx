import './CkeckBox.css'

interface CheckBoxProps {
  checked: boolean;
  onChange: () => void;
}

const CheckBox = ({ checked, onChange }: CheckBoxProps) => {
  return (
    <input
      type="checkbox"
      className="ui-checkbox"
      checked={checked}
      onChange={onChange}
    />
  );
};

export default CheckBox;
