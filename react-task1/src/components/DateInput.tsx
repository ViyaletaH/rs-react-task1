import React from 'react';

interface DateInputProps {
  inputRef?: React.RefObject<HTMLInputElement>;
  onDateChange: React.ChangeEventHandler<HTMLInputElement>;
}

const DateInput = ({ inputRef, onDateChange }: DateInputProps) => {
  return (
    <div>
      <label htmlFor="release-date">Choose the release date:</label>
      <input
        type="date"
        id="release-date"
        name="release-date"
        value={inputRef?.current?.value}
        min="2005-05-25"
        max="2033-12-31"
        required
        ref={inputRef}
        onChange={onDateChange}
      />
    </div>
  );
};

export default DateInput;
