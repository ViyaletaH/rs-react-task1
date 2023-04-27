import { ChangeEventHandler, useState, useEffect } from 'react';

export interface CheckboxProps {
  onCheckboxChange: ChangeEventHandler<HTMLInputElement>;
  checkBoxValue: boolean;
  submitted: boolean;
}

const Checkbox = ({ onCheckboxChange, checkBoxValue, submitted }: CheckboxProps) => {
  const [check, setCheck] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (checkBoxValue && submitted) {
      setCheck(false);
    } else {
      setCheck(undefined);
    }
  }, [check, checkBoxValue, submitted]);

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
            checked={check}
            onChange={onCheckboxChange}
          />
          <label htmlFor="alternative">I agree</label>
        </div>
      </fieldset>
    </div>
  );
};

export default Checkbox;
