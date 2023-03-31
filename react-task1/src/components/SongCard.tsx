import { SongOnly } from './Forms';
import React, { useState } from 'react';

function SongCard({ name, genres, album, date, video, cover }: SongOnly) {
  const [coverUrl, setCoverUrl] = useState<string | null>(null);

  React.useEffect(() => {
    if (cover) {
      const url = URL.createObjectURL(cover);
      setCoverUrl(url);
    }
  }, [cover]);

  console.log(name, genres, album, date, video, cover);

  return (
    <div className="song-card">
      <h2>{name}</h2>
      <p>Genres: {genres.join(', ')}</p>
      <p>Album: {album}</p>
      <p>Date: {date}</p>
      <p>Video: {video ? 'Yes' : 'No'}</p>
      {coverUrl && <img src={coverUrl} alt="Cover" />}
    </div>
  );
}

export default SongCard;
