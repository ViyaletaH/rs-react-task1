import React, { Component, ChangeEvent } from 'react';
import Footer from './Footer';
import '../myStyles.css';
import TextInput from './TextInput';
import Checkbox from './Checkbox';
import Dropdown from './Dropdown';
import { cards } from './data/cards';

interface FormProps {
  formsTextRef: React.RefObject<TextInput>;
}

interface FormState {
  inputValue: string;
  checkBoxValue: string[];
  selectValue: string;
}

class Forms extends Component<FormProps, FormState> {
  formsTextRef: React.RefObject<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);
    this.formsTextRef = React.createRef();
    this.state = {
      inputValue: '',
      checkBoxValue: [],
      selectValue: '',
    };
  }

  inputChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
  };

  checkboxChangeHandler = (values: string[]) => {
    this.setState({ checkBoxValue: values });
  };

  selectChangeHandler = (value: string) => {
    this.setState({ selectValue: value });
  };

  submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`${this.state.inputValue}, ${this.state.checkBoxValue}, ${this.state.selectValue}`);
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
          <Dropdown cards={cards} onSelectChange={this.selectChangeHandler} />
          <button type="submit">Submit</button>
        </form>
        <Footer />
      </div>
    );
  }
}

export default Forms;
