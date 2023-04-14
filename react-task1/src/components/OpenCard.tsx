import { cards } from './data/cards';

interface OpenCardProps {
  data: { index: number; url: string } | null;
  onCrossClick: () => void;
}

function OpenCard({ data, onCrossClick }: OpenCardProps) {
  const handleCrossClick = () => {
    onCrossClick();
  };
  const card = cards.find((element) => element.cardId === data?.index);
  return (
    <div className="overlay">
      <div className="open-card">
        <div className="cross" onClick={handleCrossClick}>
          <img src="/cross.png" alt="close" className="close-icon" />
        </div>
        <div className="card-data">
          {card && data && (
            <div className="card-main-data">
              <h2 className="album-name">
                {card.type}: {card.name}
              </h2>
              <img
                src={data.url}
                className="poster-opened"
                style={{
                  backgroundImage: `${data.url}`,
                  backgroundPosition: 'center',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: '#fff',
                }}
                alt="album cover"
              />
            </div>
          )}
          {card && (
            <div className="card-details">
              <p>Genre: {card.genre}</p>
              <p>Number of songs: {card.songs}</p>
              <div onClick={() => window.open(`${card.video}`, '_blank')} className="mv-link">
                MV: watch music video
                <span className="shine"></span>
              </div>
              <p>
                Year: {card.year}, ({card.date})
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OpenCard;
