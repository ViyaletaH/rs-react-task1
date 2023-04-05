export interface Song {
  songId?: number;
  name: string;
  genres: string;
  album: string;
  date: string;
  video: boolean;
  cover: string;
}

const songs: Array<Song> = [
  {
    songId: 0,
    name: 'I think I can fly',
    genres: 'alternative metal',
    album: 'NOW',
    date: '16.12.2009',
    video: false,
    cover: 'now',
  },
  {
    songId: 1,
    name: 'Asking why',
    genres: 'alternative metal',
    album: 'MUSIC',
    date: '05.11.2008',
    video: false,
    cover: 'music',
  },
  {
    songId: 2,
    name: 'Evolution',
    genres: 'alternative metal',
    album: 'MUSIC',
    date: '05.11.2008',
    video: true,
    cover: 'music',
  },
  {
    songId: 3,
    name: 'Destiny',
    genres: 'alternative metal',
    album: 'GO',
    date: '26.01.2011',
    video: true,
    cover: 'go',
  },
  {
    songId: 4,
    name: 'Gravitation',
    genres: 'metalcore',
    album: 'gravitation',
    date: '24.09.2014',
    video: true,
    cover: 'gravitation',
  },
];

export { songs };
