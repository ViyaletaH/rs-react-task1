import React, { useState, useRef } from 'react';
import Footer from './Footer';
import '../myStyles.css';
import TextInput from './TextInput';
import Checkbox from './Checkbox';
import Dropdown from './Dropdown';
import { cards } from './data/cards';
import DateInput from './DateInput';
import 'react-datepicker/dist/react-datepicker.css';
import Switcher from './Switcher';
import FileUpload from './FileUpload';
import { songs } from './data/songs';
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
  const [selectedDate, setSelectedDate] = useState('');
  const [switchValue, setSwitchValue] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const inputTextRef = useRef<HTMLInputElement>(null);
  const switchRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  //   const resetForm = () => {
  //     setTextInputValue('');
  //     setCheckBoxValue([]);
  //     setSelectedCard('');
  //     setSelectedDate('');
  //     setSwitchValue(false);
  //     setSelectedFile(null);
  //     setSubmitted(false);
  //   };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };

  return (
    <div className="forms-component">
      <div className="form-components">
        <span className="form-components-name">Help us adding a song!</span>
        <form
          onSubmit={submitHandler}
          action="/upload"
          method="POST"
          encType="multipart/form-data"
          className="main-form"
        >
          <TextInput
            inputTextRef={inputTextRef}
            onInputChange={(event) => setTextInputValue(event.target.value)}
          />
          <Checkbox
            onCheckboxChange={(values) => setCheckBoxValue(values)}
            checkedValues={checkBoxValue}
          />
          <Dropdown cards={cards} onSelectChange={(card) => setSelectedCard(card)} />
          <DateInput onDateChange={(value) => setSelectedDate(value)} dateChoice={selectedDate} />
          <Switcher
            inputRef={switchRef}
            onSwitchChange={(event) => setSwitchValue(event.target.checked)}
          />
          <FileUpload onFileChange={handleFileChange} />
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="form-cards">
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
        {songs.map((song) => (
          <div key={song.songId} className="song-card">
            <span className="song-name">{song.name}</span>
            <p>Genres: {song.genres}</p>
            <img
              src={`/posters/${song.cover}.PNG`}
              className="poster"
              style={{
                backgroundImage: song.cover !== '' ? `url( /${song.cover}.png)` : `url(./logo.png)`,
                backgroundPosition: 'center',
                backgroundSize: song.cover !== '' ? 'cover' : 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundColor: song.cover !== '' ? undefined : '#fff',
              }}
            />
            <p>Album: {song.album}</p>
            <p>Date: {song.date}</p>
            <p>MV: {song.video ? 'Yes' : 'No'}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Forms;
