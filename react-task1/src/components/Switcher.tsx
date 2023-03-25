import React, { Component } from 'react';

interface SwitcherProps {
  inputRef?: React.RefObject<HTMLInputElement>;
  onSwitchChange: React.ChangeEventHandler<HTMLInputElement>;
}

class Switcher extends Component<SwitcherProps> {
  render() {
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
              checked
              ref={this.props.inputRef}
              onChange={this.props.onSwitchChange}
            />
          </div>
          <div>
            <label htmlFor="no">No</label>
            <input
              type="radio"
              id="no"
              name="video"
              value="no"
              ref={this.props.inputRef}
              onChange={this.props.onSwitchChange}
            />
          </div>
        </fieldset>
      </div>
    );
  }
}

export default Switcher;
