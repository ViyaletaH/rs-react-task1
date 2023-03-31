import { useState, useEffect, ChangeEvent } from 'react';

interface CheckboxProps {
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
        <legend className="checkbox-name">Choose the genres:</legend>
        <div>
          <input
            type="checkbox"
            id="alternative"
            name="genres"
            value="alternative metal"
            required
            checked={stateCheckedValues.includes('alternative metal')}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="alternative">alternative metal</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="progressive"
            name="genres"
            value="progressive metal"
            checked={stateCheckedValues.includes('progressive metal')}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="progressive">progressive metal</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="metalcore"
            name="genres"
            value="metalcore"
            checked={stateCheckedValues.includes('metalcore')}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="metalcore">metalcore</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="nu"
            name="genres"
            value="nu metal"
            checked={stateCheckedValues.includes('nu metal')}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="nu">nu metal</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="hardcore"
            name="genres"
            value="hardcore"
            checked={stateCheckedValues.includes('hardcore')}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="hardcore">hardcore</label>
        </div>
      </fieldset>
    </div>
  );
};

export default Checkbox;
