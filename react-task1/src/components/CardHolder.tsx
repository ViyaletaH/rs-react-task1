import { Card } from './data/cards';

export interface Data {
  results: Image[];
  total: number;
  total_pages: number;
}

export interface Image {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  likes: number;
  liked_by_user: boolean;
  current_user_collections: string[];
  sponsorship: null;
  topic_submissions: object;
  user: object;
  tags: Array<{ type: string; title: string; source: object }>;
}

interface CardHolderProps {
  cards: Card[];
  covers: Data;
}

const CardHolder = ({ cards, covers }: CardHolderProps) => {
  console.log(covers);
  return (
    <div className="card-holder">
      {covers &&
        covers.results.map((cover: Image) => (
          <div key={cover.id} className="card">
            <img
              src={cover.urls.regular}
              className="poster"
              style={{
                backgroundImage: `${cover.urls.regular}`,
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#fff',
              }}
              alt="album cover"
            />
          </div>
        ))}
      {/* {cards.map((card: Card) => (
        <div
          key={card.cardId}
          data-testid={card.cardId}
          className="card"
          onClick={() => window.open(`${card.video}`, '_blank')}
        >
          <h2>
            {card.type}: {card.name}
          </h2>
          <img
            src={results.urls.regular}
            className="poster"
            style={{
              backgroundImage: card.poster !== '' ? `url( /${card.poster}.png)` : `url(./logo.png)`,
              backgroundPosition: 'center',
              backgroundSize: card.poster !== '' ? 'cover' : 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundColor: card.poster !== '' ? undefined : '#fff',
            }}
            alt="album cover"
          />
          <p>Genre: {card.genre}</p>
          <p>Year: {card.year}</p>
          <p>Songs: {card.songs}</p>
          <p>Date of release: {card.date}</p>
        </div>
      ))} */}
    </div>
  );
};

export default CardHolder;
