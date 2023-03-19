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
    video: 'https://www.youtube.com/watch?v=CBiCwXq4pE0',
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
    video: 'https://www.youtube.com/watch?v=mOa5B0-a1ag',
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
    video: 'https://www.youtube.com/watch?v=RoeYh4MwtCk',
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
    video: 'https://www.youtube.com/watch?v=8M-vVjNAnVQ',
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
    video: 'https://www.youtube.com/watch?v=5p6kvDKu0f8',
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
    video: 'https://www.youtube.com/watch?v=_qylhwD2iW8',
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
    video: 'https://www.youtube.com/watch?v=8A6aPunqD7s&list=PLwyGBg40IELJvJr9_IwpSgy-8Rt3w-6Im',
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
    video: 'https://www.youtube.com/watch?v=_5Hng27fNHI&list=PLYbmssMbAO7Fu8QWGgb36EsMepyY83aTV',
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
    video:
      'https://www.discogs.com/ja/master/589162-%E3%82%AE%E3%83%AB%E3%82%AC%E3%83%A1%E3%83%83%E3%82%B7%E3%83%A5-Girugamesh-%E7%8D%84-%E5%88%9D%E7%8A%AF%E5%9E%8B%E5%86%86%E7%9B%A4-',
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
    video: 'https://www.youtube.com/watch?v=Uemcurb5CZU',
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
    video: 'https://www.youtube.com/watch?v=WcYwFapJkZk',
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
    video: 'https://www.youtube.com/watch?v=MbKJo0a2eTo',
    poster: 'chimera',
    genre: 'metalcore',
    year: 2016,
    songs: 7,
    date: '20.01.2016',
  },
];

export { cards };
