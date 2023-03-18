export interface Card {
  cardId?: number;
  runame: string;
  engname: string;
  video: string;
  poster: string;
  genre: string;
  genres: string;
  country: string;
  year: number;
  episodes: number;
  length: number;
  done: boolean;
  popularity: number;
  adult: boolean;
  access: boolean;
  start?: string;
  day?: string;
}

const cards: Array<Card> = [
  {
    runame: 'КинПорш',
    engname: 'KinnPorsche',
    video: 'url',
    poster: 'kinporsh',
    genre: 'BL',
    genres: 'эротика, криминал, комедия, боевик',
    country: 'Таиланд',
    year: 2022,
    episodes: 14,
    length: 55,
    done: true,
    popularity: 11,
    adult: true,
    access: true,
  },
];

export { cards };
