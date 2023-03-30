import { SongOnly } from './Forms';

function SongCard({ name, genres, album, date, video, cover }: SongOnly) {
  return (
    <>
      {name} {genres} {album} {date} {video} {cover}
    </>
  );
}

export default SongCard;
