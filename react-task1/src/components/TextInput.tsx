import React, { ChangeEvent } from 'react';
import '../myStyles.css';

interface TextInputProps {
  inputTextRef?: React.RefObject<HTMLInputElement>;
  firstNameRef?: React.RefObject<HTMLInputElement>;
  lastNameRef?: React.RefObject<HTMLInputElement>;
  emailRef?: React.RefObject<HTMLInputElement>;
  phoneRef?: React.RefObject<HTMLInputElement>;
  onNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSurnameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onNumberChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onEmailChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({
  onNameChange,
  onSurnameChange,
  onNumberChange,
  onEmailChange,
  firstNameRef,
  lastNameRef,
  emailRef,
  phoneRef,
}: TextInputProps) => {
  return (
    <div>
      <div className="text-input">
        <span className="textinput-first">First name </span>
        <input
          type="text"
          maxLength={32}
          placeholder="32 letters max"
          ref={firstNameRef}
          onChange={onNameChange}
        />
      </div>
      <div className="text-input">
        <span className="textinput-last">Last name </span>
        <input
          type="text"
          maxLength={48}
          placeholder="48 letters max"
          ref={lastNameRef}
          onChange={onSurnameChange}
        />
      </div>
      <div className="text-input">
        <span className="textinput-mail">E-mail </span>
        <input type="email" ref={emailRef} onChange={onEmailChange} required />
      </div>
      <div className="text-input">
        <span className="textinput-phone">Phone </span>
        <input
          type="text"
          minLength={6}
          maxLength={15}
          placeholder="digits only"
          ref={phoneRef}
          onChange={onNumberChange}
          required
        />
      </div>
    </div>
  );
};

export default TextInput;
