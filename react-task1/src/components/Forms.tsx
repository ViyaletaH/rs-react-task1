import React, { Component, ChangeEvent } from 'react';
import Footer from './Footer';
import '../myStyles.css';
import TextInput from './TextInput';
import Checkbox from './Checkbox';
import Dropdown from './Dropdown';
import { cards } from './data/cards';
import DateInput from './DateInput';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Switcher from './Switcher';
import FileUpload from './FileUpload';

interface FormProps {
  formsTextRef: React.RefObject<TextInput>;
  formsDateRef: React.RefObject<DatePicker>;
  formsSwitchRef: React.RefObject<Switcher>;
}

interface FormState {
  inputValue: string;
  checkBoxValue: string[];
  selectValue: string;
  dateValue: string;
  switchValue: string;
  fileValue: File | undefined;
}

class Forms extends Component<FormProps, FormState> {
  formsTextRef: React.RefObject<HTMLInputElement>;
  formsDateRef: React.RefObject<DatePicker>;
  formsSwitchRef: React.RefObject<Switcher>;

  constructor(props: FormProps) {
    super(props);
    this.formsTextRef = React.createRef();
    this.formsDateRef = React.createRef();
    this.formsSwitchRef = React.createRef();
    this.state = {
      inputValue: '',
      checkBoxValue: [],
      selectValue: '',
      dateValue: '',
      switchValue: '',
      fileValue: undefined,
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

  dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ dateValue: event.target.value });
  };

  switchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ switchValue: event.target.value });
  };

  fileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ fileValue: event.target.files?.[0] });
  };

  submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(
      `${this.state.inputValue}, ${this.state.checkBoxValue}, ${this.state.selectValue}, ${this.state.dateValue}, ${this.state.switchValue}, ${this.state.fileValue}`
    );
  };

  render() {
    return (
      <div className="forms-component">
        <span>Add a song</span>
        <form
          onSubmit={this.submitHandler}
          action="/upload"
          method="POST"
          encType="multipart/form-data"
        >
          <TextInput inputRef={this.formsTextRef} onInputChange={this.inputChangedHandler} />
          <Checkbox
            onCheckboxChange={this.checkboxChangeHandler}
            checkedValues={this.state.checkBoxValue}
          />
          <Dropdown cards={cards} onSelectChange={this.selectChangeHandler} />
          <DateInput onDateChange={this.dateChangeHandler} />
          <Switcher onSwitchChange={this.switchChangeHandler} />
          <FileUpload onFileChange={this.fileChangeHandler} />
          <button type="submit">Submit</button>
        </form>
        <Footer />
      </div>
    );
  }
}

export default Forms;
