import React, { Component, ChangeEvent } from 'react';

interface CheckboxProps {
  onCheckboxChange: (values: string[]) => void;
  checkedValues: string[];
}

interface CheckboxState {
  checkedValues: string[];
}

class Checkbox extends Component<CheckboxProps, CheckboxState> {
  constructor(props: CheckboxProps) {
    super(props);
    this.state = {
      checkedValues: props.checkedValues,
    };
  }

  handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    this.setState(
      (prevState) => ({
        checkedValues: isChecked
          ? [...prevState.checkedValues, value]
          : prevState.checkedValues.filter((variant) => variant !== value),
      }),
      () => this.props.onCheckboxChange(this.state.checkedValues)
    );
  };

  render() {
    return (
      <div>
        <fieldset>
          <legend>Choose the genres:</legend>
          <div>
            <input
              type="checkbox"
              id="alternative"
              name="genres"
              value="alternative metal"
              checked={this.state.checkedValues.includes('alternative metal')}
              onChange={this.handleCheckboxChange}
            />
            <label htmlFor="alternative">alternative metal</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="progressive"
              name="genres"
              value="progressive metal"
              checked={this.state.checkedValues.includes('progressive metal')}
              onChange={this.handleCheckboxChange}
            />
            <label htmlFor="progressive">progressive metal</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="metalcore"
              name="genres"
              value="metalcore"
              checked={this.state.checkedValues.includes('metalcore')}
              onChange={this.handleCheckboxChange}
            />
            <label htmlFor="metalcore">metalcore</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="nu"
              name="genres"
              value="nu metal"
              checked={this.state.checkedValues.includes('nu metal')}
              onChange={this.handleCheckboxChange}
            />
            <label htmlFor="nu">nu metal</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="hardcore"
              name="genres"
              value="hardcore"
              checked={this.state.checkedValues.includes('hardcore')}
              onChange={this.handleCheckboxChange}
            />
            <label htmlFor="hardcore">hardcore</label>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default Checkbox;
