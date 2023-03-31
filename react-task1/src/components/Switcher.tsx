import React from 'react';

interface SwitcherProps {
  inputRef?: React.RefObject<HTMLInputElement>;
  onSwitchChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Switcher = ({ inputRef, onSwitchChange }: SwitcherProps) => {
  return (
    <div>
      <fieldset>
        <legend>Is there a music video for the song?</legend>
        <div>
          <label htmlFor="yes">Yes</label>
          <input
            type="radio"
            id="yes"
            name="video"
            value="yes"
            ref={inputRef}
            onChange={onSwitchChange}
          />
        </div>
        <div>
          <label htmlFor="no">No</label>
          <input
            type="radio"
            id="no"
            name="video"
            value="no"
            checked
            ref={inputRef}
            onChange={onSwitchChange}
          />
        </div>
      </fieldset>
    </div>
  );
};

export default Switcher;
