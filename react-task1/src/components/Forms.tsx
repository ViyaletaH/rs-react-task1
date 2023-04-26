import React, { useState, useRef, ChangeEvent } from 'react';
import Footer from './Footer';
import '../myStyles.css';
import TextInput from './TextInput';
import Checkbox from './Checkbox';
import 'react-datepicker/dist/react-datepicker.css';
import SongCard from './SongCard';
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
  const [checkBoxValue, setCheckBoxValue] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<Contact | null>(null);
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [surnameValue, setSurnameValue] = useState('');

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const handleNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const enteredValue = event.target.value;
    const regEx = /^[0-9\b]/;
    if (enteredValue === '' || regEx.test(enteredValue)) {
      setNumber(enteredValue);
    }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const enteredValue = event.target.value;
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegEx.test(enteredValue)) {
      setEmail(enteredValue);
    }
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    const newContactData: Contact = {
      first: nameValue,
      last: surnameValue,
      mail: email,
      phone: number,
      message: string,
      agreement: boolean,
    };
    setData(newContactData);
    setTimeout(function () {
      alert('Your data was sent!');
    }, 1000);
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
            onCheckboxChange={(values) => setCheckBoxValue(values)}
            checkedValues={checkBoxValue}
          />
          <Textarea />
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="form-cards">
        {submitted && songData && <SongCard key={songData.key} data={songData} />}
      </div>
      <Footer />
    </div>
  );
}

export default Forms;
