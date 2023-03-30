import { SongOnly } from './Forms';

interface SongCardProps {
  songData: SongOnly;
}

function SongCard({ songData }: SongCardProps) {
  return (
    <>
      {songData.name} {songData.genres} {songData.album} {songData.date} {songData.video}{' '}
      {songData.cover}
    </>
  );
}

export default SongCard;
