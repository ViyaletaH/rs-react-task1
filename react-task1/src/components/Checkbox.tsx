import { ChangeEventHandler } from 'react';

export interface CheckboxProps {
  onCheckboxChange: ChangeEventHandler<HTMLInputElement>;
}

const Checkbox = ({ onCheckboxChange }: CheckboxProps) => {
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
            onChange={onCheckboxChange}
          />
          <label htmlFor="alternative">I agree</label>
        </div>
      </fieldset>
    </div>
  );
};

export default Checkbox;
