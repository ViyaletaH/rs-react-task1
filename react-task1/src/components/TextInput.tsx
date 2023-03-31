import React, { ChangeEvent } from 'react';
import '../myStyles.css';

interface TextInputProps {
  inputTextRef?: React.RefObject<HTMLInputElement>;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({ inputTextRef, onInputChange }: TextInputProps) => {
  return (
    <div className="textInput">
      <span className="textinput-name">Enter the song&apos;s name: </span>
      <input type="text" ref={inputTextRef} onChange={onInputChange} required />
    </div>
  );
};

export default TextInput;
