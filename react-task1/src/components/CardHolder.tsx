import { Card, cards } from './data/cards';

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
  covers: Data;
  onCardClick: (index: number, url: string) => void;
}

const CardHolder = ({ covers, onCardClick }: CardHolderProps) => {
  const handleClick = (index: number, url: string) => {
    onCardClick(index, url);
  };
  console.log(cards);
  return (
    <div className="card-holder">
      {cards.map((card: Card, index: number) => (
        <div
          key={card.cardId}
          data-testid={card.cardId}
          className="card"
          onClick={() => handleClick(index, covers.results[index].urls.regular)}
        >
          <h2>
            {card.type}: {card.name}
          </h2>
          <img
            src={covers.results[index].urls.regular}
            className="poster"
            style={{
              backgroundImage: `${covers.results[index]?.urls.regular}`,
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#fff',
            }}
            alt="album cover"
          />
          <p>Year: {card.year}</p>
        </div>
      ))}
    </div>
  );
};

export default CardHolder;
