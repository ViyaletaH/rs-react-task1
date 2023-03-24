import React, { Component, ChangeEvent } from 'react';
import Footer from './Footer';
import '../myStyles.css';
import TextInput from './TextInput';
import Checkbox from './Checkbox';

interface FormProps {
  formsTextRef: React.RefObject<TextInput>;
  formCheckboxRef: React.RefObject<Checkbox>;
}

interface FormState {
  inputValue: string;
  checkBoxValue: string[];
}

class Forms extends Component<FormProps, FormState> {
  formsTextRef: React.RefObject<HTMLInputElement>;
  formCheckboxRef: React.RefObject<Checkbox>;

  constructor(props: FormProps) {
    super(props);
    this.formsTextRef = React.createRef();
    this.formCheckboxRef = React.createRef();
    this.state = {
      inputValue: '',
      checkBoxValue: [],
    };
  }

  inputChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
  };

  checkboxChangeHandler = (values: string[]) => {
    this.setState({ checkBoxValue: values });
  };

  submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`${this.state.inputValue}, ${this.state.checkBoxValue}`);
  };

  render() {
    return (
      <div className="forms">
        <span>Add a song</span>
        <form onSubmit={this.submitHandler}>
          <TextInput inputRef={this.formsTextRef} onInputChange={this.inputChangedHandler} />
          <Checkbox
            onCheckboxChange={this.checkboxChangeHandler}
            checkedValues={this.state.checkBoxValue}
          />
          <button type="submit">Submit</button>
        </form>
        <Footer />
      </div>
    );
  }
}

export default Forms;
