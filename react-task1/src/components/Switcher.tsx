import React from 'react';

interface SwitcherProps {
  inputRef?: React.RefObject<HTMLInputElement>;
  onSwitchChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Switcher = ({ inputRef, onSwitchChange }: SwitcherProps) => {
  return (
    <div className="switcher-form">
      <fieldset className="switcher">
        <legend className="switcher-name">Is there a music video for the song?</legend>
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
            defaultChecked
            ref={inputRef}
            onChange={onSwitchChange}
          />
        </div>
      </fieldset>
    </div>
  );
};

export default Switcher;
