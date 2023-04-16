import '../myStyles.css';
import { useState, useEffect, ChangeEvent } from 'react';
import HeaderBar from './HeaderBar';
import CardHolder, { Data } from './CardHolder';
import Footer from './Footer';
import OpenCard from './OpenCard';
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';
import { createAction } from '@reduxjs/toolkit';
// import { useGetDefaultCoversQuery, useGetCustomCoversQuery } from './services/apiDataFetch';
// import { initialState } from './features/apiSlice';
import { setCovers, setLoading, setError } from './features/coversSlice';
import { useSelector } from 'react-redux';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

// import { coversFetch } from './services/apiDataFetch';
interface RootState {
  coversFetch: {
    getDefaultCovers: {
      data: Data | null;
      isLoading: boolean;
      error: FetchBaseQueryError | null;
    };
  };
}

const Header = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  // const [covers, setCovers] = useState<Data | null>(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [cardOpen, setCardOpen] = useState<{ index: number; url: string } | null>(null);
  // const [loading, setLoading] = useState(true);
  // const [setBasicUrl] = useState<string>('');
  const { basicUrl } = useAppSelector((state) => state.apiSlice);
  const dispatch = useAppDispatch();
  const searchPhotos = createAction<string>('api/searchPhotos');

  const handleOverlayClick = (index: number, url: string) => {
    setShowOverlay(true);
    setCardOpen({ index, url });
  };

  const handleClosure = () => {
    setShowOverlay(false);
  };

  // const { data } = useGetDefaultCoversQuery(undefined);
  // const { data, isLoading, error } = useGetCustomCoversQuery('');

  // const getCustom = useGetCustomCoversQuery('');
  // console.log(data);

  const { data, isLoading, error } = useSelector(
    (state: RootState) => state.coversFetch.getDefaultCovers
  );

  useEffect(() => {
    if (data) {
      dispatch(setCovers(data));
      dispatch(setLoading(false));
      localStorage.setItem('basicUrl', basicUrl);
      if (data.results.length === 0) {
        alert('no results for your request');
      }
    }
    if (error) {
      dispatch(setError(error.status));
      dispatch(setLoading(false));
      alert(error.status);
    }
  }, [data, error, dispatch, basicUrl]);

  // useEffect(() => {
  //   const headers = new Headers({
  //     Authorization: 'Client-ID 6adFL1um8JXRIrgsfChxvwqAc_f1MVYZKe5lOBtuSek',
  //   });
  //   fetch(basicUrl, { headers })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setCovers(data);
  //       setLoading(false);
  //       localStorage.setItem('basicUrl', basicUrl);
  //       if (data.results.length === 0) {
  //         alert('no results for your request');
  //       }
  //     })
  //     .catch((error) => {
  //       if (error) {
  //         alert(error.message);
  //       }
  //     });
  // }, [basicUrl]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter' && searchValue.length !== 0) {
      const newRequest =
        'https://api.unsplash.com/search/photos?query=' +
        searchValue +
        '&client_id=6adFL1um8JXRIrgsfChxvwqAc_f1MVYZKe5lOBtuSek';
      dispatch(searchPhotos(newRequest));
    }
  };

  // useEffect(() => {
  //   if (basicUrl) {
  //     setBasicUrl(basicUrl);
  //   } else {
  //     setBasicUrl(
  //       'https://api.unsplash.com/search/photos?query=gloomy+sky&client_id=6adFL1um8JXRIrgsfChxvwqAc_f1MVYZKe5lOBtuSek'
  //     );
  //   }
  // }, []);

  return (
    <div className="container">
      {showOverlay && <OpenCard data={cardOpen} onCrossClick={handleClosure} />}
      <HeaderBar onSearchChange={handleSearchChange} onKeyPress={handleKeyPress} />
      {isLoading && (
        <div className="loading-container">
          <span>Loading...</span>
          <div className="loading-bg"></div>
        </div>
      )}
      {/* {covers && <CardHolder covers={covers} onCardClick={handleOverlayClick} />} */}
      <Footer />
    </div>
  );
};

export default Header;
