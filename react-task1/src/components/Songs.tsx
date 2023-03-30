import React, { Component, RefObject } from 'react';
import { SongOnly } from './Forms';
import Forms from './Forms';

export interface SongsProps {
  name: string;
  genres: string[];
  album: string;
  date: string;
  video: string;
  cover: Blob | MediaSource | string;
  fileValueUrl?: string;
  addNewCard: (newSong: SongOnly) => void;
  newCard?: SongOnly;
}

interface SongsState {
  newCards: SongOnly[];
}

class Songs extends Component<SongsProps, SongsState> {
  formRef: RefObject<Forms>;

  constructor(props: SongsProps) {
    super(props);
    this.state = {
      newCards: [],
    };
    this.formRef = React.createRef<Forms>();
  }

  componentDidMount() {
    const formsState = this.formRef.current?.state;
    console.log(formsState);
  }
  addNewCard = () => {
    const newSong: SongOnly = {
      name: this.props.name,
      genres: this.props.genres,
      album: this.props.album,
      date: this.props.date,
      video: this.props.video,
      cover: this.props.cover,
      fileValueUrl: this.props.fileValueUrl,
    };
    this.setState(
      (prevState) => ({
        newCards: [...prevState.newCards, newSong],
      }),
      () => {
        this.props.addNewCard(newSong);
      }
    );
  };
  render() {
    const { newCards } = this.state;
    return (
      <div className="song-card">
        {newCards.map((song: SongOnly) => (
          <div key={song.name} data-testid={song.name} className="song-card">
            <h2>{song.name}</h2>
            <p>Album: {song.album}</p>
            <img
              src={
                typeof song.cover === 'string'
                  ? `/posters/${song.cover}.PNG`
                  : URL.createObjectURL(song.cover)
              }
              className="cover"
              style={{
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#fff',
              }}
            />
            <p>Genres: {song.genres.join(', ')}</p>
            <p>Has MV: {song.video ? 'yes' : 'no'}</p>
            <p>Date of release: {song.date}</p>
          </div>
        ))}
        {/* {songs.map((song: Song) => (
          <div key={song.songId} data-testid={song.songId} className="song-card">
            <h2>{song.name}</h2>
            <p>Album: {song.album}</p>
            <img
              src={`/posters/${song.cover}.PNG`}
              className="cover"
              style={{
                backgroundImage: song.cover !== '' ? `url( /${song.cover}.png)` : `url(./logo.png)`,
                backgroundPosition: 'center',
                backgroundSize: song.cover !== '' ? 'cover' : 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundColor: song.cover !== '' ? undefined : '#fff',
              }}
            />
            <p>Genres: {song.genres}</p>
            <p>Has MV: {song.video === true ? 'yes' : 'no'}</p>
            <p>Date of release: {song.date}</p>
          </div>
        ))} */}
      </div>
    );
  }
}

export default Songs;
