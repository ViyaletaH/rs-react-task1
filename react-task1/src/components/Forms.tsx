import React, { useState, ChangeEvent } from 'react';
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
  video: string;
  cover: Blob | MediaSource | string;
  fileValueUrl?: string;
}

function Forms() {
  const [textInputValue, setTextInputValue] = useState('');
  const [checkBoxValue, setCheckBoxValue] = useState<string[]>([]);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [switchValue, setSwitchValue] = useState(false);
  const [selectedFile, setSelectedFile] = useState<ChangeEvent<HTMLInputElement> | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setTextInputValue('');
    setCheckBoxValue([]);
    setSelectedCard(null);
    setSelectedDate(null);
    setSwitchValue(false);
    setSelectedFile(null);
    setSubmitted(false);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(event.target.value);
    setSelectedDate(newDate);
  };

  return (
    <div className="forms-component">
      <span>Help us adding a song!</span>
      <form onSubmit={submitHandler} action="/upload" method="POST" encType="multipart/form-data">
        <TextInput
          inputTextRef={null}
          onInputChange={(event) => setTextInputValue(event.target.value)}
        />
        <Checkbox
          onCheckboxChange={(values) => setCheckBoxValue(values)}
          checkedValues={checkBoxValue}
        />
        <Dropdown
          cards={cards}
          onSelectChange={(card) => setSelectedCard(card)}
          selectedVariant={selectedCard}
        />
        <DateInput onDateChange={handleDateChange} chosenDate={selectedDate} />
        <Switcher
          onSwitchChange={(event) => setSwitchValue(event.target.checked)}
          switchChoice={switchValue}
        />
        <FileUpload onFileChange={(file) => setSelectedFile(file)} uploadedFile={selectedFile} />
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
