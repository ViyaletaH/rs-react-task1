import React, { Component, ChangeEvent } from 'react';
import Footer from './Footer';
import '../myStyles.css';
import TextInput from './TextInput';

interface FormProps {
  formsTextRef: React.RefObject<TextInput>;
}

interface FormState {
  inputValue: string;
}

class Forms extends Component<FormProps, FormState> {
  formsTextRef: React.RefObject<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);
    this.formsTextRef = React.createRef();
    this.state = {
      inputValue: '',
    };
  }

  inputChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
  };

  submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(this.state.inputValue);
  };

  render() {
    return (
      <div className="forms">
        <span>Add a song</span>
        <form onSubmit={this.submitHandler}>
          <TextInput inputRef={this.formsTextRef} onInputChange={this.inputChangedHandler} />
          <button type="submit">Submit</button>
        </form>
        <Footer />
      </div>
    );
  }
}

export default Forms;
