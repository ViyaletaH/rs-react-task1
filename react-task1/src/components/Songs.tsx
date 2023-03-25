import React, { Component } from 'react';
import { songs, SongStr } from './data/songs';

class Song extends Component {
  render() {
    return (
      <div>
        {songs.map((song: SongStr) => (
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
        ))}
      </div>
    );
  }
}

export default Song;
