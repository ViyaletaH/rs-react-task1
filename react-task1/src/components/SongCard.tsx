import { SongOnly } from './Forms';
import React, { useState } from 'react';

function SongCard({ name, genres, album, date, video, cover }: SongOnly) {
  const [coverUrl, setCoverUrl] = useState<string | null>(null);
  const [songs, setSongs] = useState<SongOnly[]>([]);

  React.useEffect(() => {
    if (cover) {
      const url = URL.createObjectURL(cover);
      setCoverUrl(url);
    }
    setSongs((prevSongs) => [...prevSongs, { name, genres, album, date, video, cover }]);
  }, [cover, name, genres, album, date, video]);

  return (
    <div>
      {songs.map((song) => (
        <div className="song-card" key={song.name}>
          <span className="song-name">{song.name}</span>
          <p>Genres: {song.genres.join(', ')}</p>
          {coverUrl && (
            <img
              src={coverUrl}
              alt="album cover"
              className="poster"
              style={{
                backgroundImage: `url( /${coverUrl})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            />
          )}
          <p>Album: {song.album}</p>
          <p>Date: {song.date}</p>
          <p>MV: {song.video ? 'Yes' : 'No'}</p>
        </div>
      ))}
    </div>
  );
}

export default SongCard;
