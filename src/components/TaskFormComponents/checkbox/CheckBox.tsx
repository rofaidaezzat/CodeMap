import './CkeckBox.css'


interface CheckBoxProps {
  checked: boolean;
  onChange?: () => void;
    disabled?: boolean; 

}

const CheckBox = ({ checked, onChange,disabled }: CheckBoxProps) => {
  return (
    <input
      type="checkbox"
      className="ui-checkbox"
      checked={checked}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default CheckBox;
