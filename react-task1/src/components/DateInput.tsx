import React, { useState, ChangeEvent } from 'react';

interface DateInputProps {
  onDateChange: (event: string) => void;
  dateChoice: string;
}

const DateInput = ({ onDateChange, dateChoice }: DateInputProps) => {
  const [stateDateValue, setStateDateValue] = useState<string>(dateChoice);

  function handleDateChange(event: ChangeEvent<HTMLInputElement>) {
    const newDateValue = event.target.value;
    setStateDateValue(newDateValue);
    onDateChange(newDateValue);
  }
  return (
    <div className="date-form">
      <label htmlFor="release-date" className="release-date">
        Choose the release date:
      </label>
      <input
        type="date"
        id="release-date"
        name="release-date"
        value={stateDateValue}
        min="2005-05-25"
        max="2033-12-31"
        required
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DateInput;
