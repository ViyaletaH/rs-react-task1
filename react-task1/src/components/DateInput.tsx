import React, { Component } from 'react';

interface DateInputProps {
  inputRef?: React.RefObject<HTMLInputElement>;
  onDateChange: React.ChangeEventHandler<HTMLInputElement>;
}

class DateInput extends Component<DateInputProps> {
  render() {
    return (
      <div>
        <label htmlFor="release-date">Choose the release date:</label>
        <input
          type="date"
          id="release-date"
          name="release-date"
          value={this.props.inputRef?.current?.value}
          min="2005-05-25"
          max="2033-12-31"
          required
          ref={this.props.inputRef}
          onChange={this.props.onDateChange}
        />
      </div>
    );
  }
}

export default DateInput;
