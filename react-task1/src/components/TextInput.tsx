import React, { Component, ChangeEvent } from 'react';
import '../myStyles.css';

interface TextInputProps {
  inputRef?: React.RefObject<HTMLInputElement>;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

class TextInput extends Component<TextInputProps> {
  render() {
    return (
      <div className="textInput">
        <span>Enter the song&apos;s name:</span>
        <input type="text" ref={this.props.inputRef} onChange={this.props.onInputChange} required />
      </div>
    );
  }
}

export default TextInput;
