import React, { useState, useRef } from 'react';
import Footer from './Footer';
import '../myStyles.css';
import TextInput from './TextInput';
import Checkbox from './Checkbox';
import Dropdown from './Dropdown';
import { cards } from './data/cards';
import DateInput from './DateInput';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Switcher from './Switcher';
import FileUpload from './FileUpload';
// import Songs from './Songs';
import SongCard from './SongCard';

export interface SongOnly {
  name: string;
  genres: string[];
  album: string;
  date: string;
  video: boolean;
  cover: File | null;
  fileValueUrl?: string;
}

function Forms() {
  const [textInputValue, setTextInputValue] = useState('');
  const [checkBoxValue, setCheckBoxValue] = useState<string[]>([]);
  const [selectedCard, setSelectedCard] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [switchValue, setSwitchValue] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const inputTextRef = useRef<HTMLInputElement>(null);
  const switchRef = useRef<HTMLInputElement>(null);
  //   const coverRef = useRef<HTMLInputElement>();

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setTextInputValue('');
    setCheckBoxValue([]);
    setSelectedCard('');
    setSelectedDate('');
    setSwitchValue(false);
    setSelectedFile(null);
    setSubmitted(false);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };

  return (
    <div className="forms-component">
      <span>Help us adding a song!</span>
      <form onSubmit={submitHandler} action="/upload" method="POST" encType="multipart/form-data">
        <TextInput
          inputTextRef={inputTextRef}
          onInputChange={(event) => setTextInputValue(event.target.value)}
        />
        <Checkbox
          onCheckboxChange={(values) => setCheckBoxValue(values)}
          checkedValues={checkBoxValue}
        />
        <Dropdown cards={cards} onSelectChange={(card) => setSelectedCard(card)} />
        <DateInput onDateChange={handleDateChange} />
        <Switcher
          inputRef={switchRef}
          onSwitchChange={(event) => setSwitchValue(event.target.checked)}
        />
        <FileUpload onFileChange={handleFileChange} />
        <button type="submit" onClick={resetForm}>
          Submit
        </button>
      </form>
      {submitted && (
        <SongCard
          name={textInputValue}
          genres={checkBoxValue}
          album={selectedCard}
          date={selectedDate}
          video={switchValue}
          cover={selectedFile}
        />
      )}
      {/* <Songs
        name={this.state.inputValue}
        date={this.state.dateValue}
        cover={this.state.fileValue}
        video={this.state.switchValue}
        album={this.state.selectValue}
        genres={this.state.checkBoxValue}
        addNewCard={this.addNewCard}
        ref={this.songsRef}
      /> */}
      <Footer />
    </div>
  );
}

export default Forms;