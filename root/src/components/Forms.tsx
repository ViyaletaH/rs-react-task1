import React, { useState, useRef, ChangeEvent } from 'react';
import Footer from './Footer';
import TextInput from './TextInput';
import Checkbox from './Checkbox';
import 'react-datepicker/dist/react-datepicker.css';
import Textarea from './Textarea';

export interface Contact {
  first: string;
  last: string;
  mail: string;
  phone: string;
  message: string;
  agreement: boolean;
}

function Forms() {
  const [checkBoxValue, setCheckBoxValue] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<Contact | null>(null);
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [surnameValue, setSurnameValue] = useState('');
  const [messageValue, setmessageValue] = useState('');

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const enteredValue = event.target.value;
    const regEx = /^[0-9]*$/;
    if (regEx.test(enteredValue)) {
      setNumber(enteredValue);
    }
    if (!regEx.test(enteredValue)) {
      phoneRef!.current!.value = '';
      setNumber('');
    }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const enteredValue = event.target.value;
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegEx.test(enteredValue)) {
      setEmail(enteredValue);
    }
  };

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const enteredValue = event.target.value;
    setmessageValue(enteredValue);
  };

  const handleCheckboxChange = () => {
    setCheckBoxValue(true);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    const newContactData: Contact = {
      first: nameValue,
      last: surnameValue,
      mail: email,
      phone: number,
      message: messageValue,
      agreement: checkBoxValue,
    };
    setData(newContactData);
    setTimeout(function () {
      alert(`${newContactData.first}, your data was sent!`);
      setCheckBoxValue(false);
      if (firstNameRef.current) {
        firstNameRef.current.value = '';
        firstNameRef.current.focus();
      }
      if (lastNameRef.current) {
        lastNameRef.current.value = '';
      }
      if (messageRef.current) {
        messageRef.current.value = '';
      }
      emailRef!.current!.value = '';
      phoneRef!.current!.value = '';
      setSubmitted(false);
    }, 500);
  };

  return (
    <div className="forms-component">
      <div className="form-components">
        <span className="form-components-name">Fill in the form:</span>
        <form
          onSubmit={submitHandler}
          action="/upload"
          method="POST"
          encType="multipart/form-data"
          className="main-form"
        >
          <TextInput
            firstNameRef={firstNameRef}
            lastNameRef={lastNameRef}
            emailRef={emailRef}
            phoneRef={phoneRef}
            onNameChange={(event) => setNameValue(event.target.value)}
            onSurnameChange={(event) => setSurnameValue(event.target.value)}
            onNumberChange={handleNumberChange}
            onEmailChange={handleEmailChange}
          />
          <Checkbox
            onCheckboxChange={handleCheckboxChange}
            checkBoxValue={checkBoxValue}
            submitted={submitted}
          />
          <Textarea messageRef={messageRef} onMessageChange={handleMessageChange} />
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Forms;
