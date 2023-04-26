import { useState, useEffect, ChangeEvent } from 'react';

export interface CheckboxProps {
  onCheckboxChange: (values: string[]) => void;
  checkedValues: string[];
}

const Checkbox = ({ onCheckboxChange, checkedValues }: CheckboxProps) => {
  const [stateCheckedValues, setStateCheckedValues] = useState<string[]>(checkedValues);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    setStateCheckedValues((prevState) =>
      isChecked ? [...prevState, value] : prevState.filter((variant) => variant !== value)
    );
  };

  useEffect(() => {
    onCheckboxChange(stateCheckedValues);
  }, [stateCheckedValues, onCheckboxChange]);

  return (
    <div className="checkbox-form">
      <fieldset>
        <legend className="checkbox-name">Terms of the privacy policy</legend>
        <div>
          <input
            type="checkbox"
            id="agree"
            name="policy-agreement"
            value="agree"
            required
            onChange={handleCheckboxChange}
          />
          <label htmlFor="alternative">I agree</label>
        </div>
      </fieldset>
    </div>
  );
};

export default Checkbox;
