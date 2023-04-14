import { Data } from '../CardHolder';
import fetch from 'node-fetch';

const basicUrl =
  'https://api.unsplash.com/search/photos?query=gloomy+sky&client_id=6adFL1um8JXRIrgsfChxvwqAc_f1MVYZKe5lOBtuSek';
let apiData: Data;
export const fetchData = async () => {
  const headers = new Headers({
    Authorization: 'Client-ID 6adFL1um8JXRIrgsfChxvwqAc_f1MVYZKe5lOBtuSek',
  });
  const res = await fetch(basicUrl, { headers });
  apiData = (await res.json()) as Data;
  return apiData;
};

fetchData();

export { apiData };
