import { SongOnly } from './Forms';
import { useState, useRef, useEffect } from 'react';

interface SongCardProps {
  data: SongOnly;
  key?: string;
}

function SongCard({ data, key }: SongCardProps) {
  const [songs, setSongs] = useState<SongOnly[]>([]);
  const prevDataRef = useRef<SongOnly>();

  useEffect(() => {
    if (prevDataRef.current !== data && data.cover) {
      const url = URL.createObjectURL(data.cover);
      prevDataRef.current = data;
      setSongs((prevSongs) => {
        const newSongIndex = prevSongs.findIndex(
          (song) => song.key === (key || `${data.name}-${new Date().getTime()}`)
        );
        const updatedSong = {
          ...data,
          key: key || `${data.name}-${new Date().getTime()}`,
          coverUrl: url,
        };
        if (newSongIndex === -1) {
          return [...prevSongs, updatedSong];
        } else {
          const newSongs = [...prevSongs];
          newSongs.splice(newSongIndex, 1, updatedSong);
          return newSongs;
        }
      });
    }
  }, [data, key, data.cover]);

  return (
    <div>
      {songs.map((song) => (
        <div className="song-card" key={song.key}>
          <span className="song-name">{song.name}</span>
          <p>Genres: {song.genres.join(', ')}</p>
          {song.coverUrl && (
            <img
              src={song.coverUrl}
              alt="album cover"
              className="poster"
              style={{
                backgroundImage: `url( /${song.coverUrl})`,
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
