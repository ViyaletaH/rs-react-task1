export interface Card {
  cardId?: number;
  type: string;
  name: string;
  video?: string;
  poster: string;
  genre: string;
  year: number;
  songs: number;
  date: string;
}

const cards: Array<Card> = [
  {
    cardId: 0,
    type: 'album',
    name: "13's reborn",
    video: '',
    poster: 'reborn',
    genre: 'alternative metal',
    year: 2006,
    songs: 12,
    date: '27.09.2006',
  },
  {
    cardId: 1,
    type: 'album',
    name: 'Girugamesh',
    video: '',
    poster: 'girugamesh',
    genre: 'alternative metal',
    year: 2007,
    songs: 13,
    date: '26.12.2007',
  },
  {
    cardId: 2,
    type: 'album',
    name: 'MUSIC',
    video: '',
    poster: 'music',
    genre: 'alternative metal',
    year: 2008,
    songs: 12,
    date: '05.11.2008',
  },
  {
    cardId: 3,
    type: 'album',
    name: 'NOW',
    video: '',
    poster: 'now',
    genre: 'alternative metal',
    year: 2009,
    songs: 12,
    date: '16.12.2009',
  },
  {
    cardId: 4,
    type: 'album',
    name: 'GO',
    video: '',
    poster: 'go',
    genre: 'alternative metal',
    year: 2011,
    songs: 11,
    date: '26.01.2011',
  },
  {
    cardId: 5,
    type: 'album',
    name: 'MONSTER',
    video: '',
    poster: 'monster',
    genre: 'progressive metal',
    year: 2013,
    songs: 12,
    date: '27.11.2013',
  },
  {
    cardId: 6,
    type: 'album',
    name: 'LIVE BEST',
    video: '',
    poster: 'live',
    genre: 'progressive metal',
    year: 2014,
    songs: 19,
    date: '26.03.2014',
  },
  {
    cardId: 7,
    type: 'album',
    name: 'CORE BEST',
    video: '',
    poster: 'core',
    genre: 'metalcore',
    year: 2014,
    songs: 24,
    date: '11.10.2014',
  },
  {
    cardId: 9,
    type: 'mini-album',
    name: '獄-初犯型円盤',
    video: '',
    poster: 'jap',
    genre: 'nu metal, hardcore',
    year: 2005,
    songs: 9,
    date: '25.05.2005',
  },
  {
    cardId: 10,
    type: 'mini-album',
    name: 'Reason of Crying',
    video: '',
    poster: 'reasons',
    genre: 'alternative metal',
    year: 2007,
    songs: 6,
    date: '18.07.2007',
  },
  {
    cardId: 11,
    type: 'mini-album',
    name: 'gravitation',
    video: '',
    poster: 'gravitation',
    genre: 'metalcore',
    year: 2014,
    songs: 5,
    date: '24.09.2014',
  },

  {
    cardId: 12,
    type: 'mini-album',
    name: 'chimera',
    video: '',
    poster: 'chimera',
    genre: 'metalcore',
    year: 2016,
    songs: 7,
    date: '20.01.2016',
  },
];

export { cards };
