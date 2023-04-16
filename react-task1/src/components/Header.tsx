import '../myStyles.css';
import { useState, useEffect, ChangeEvent } from 'react';
import HeaderBar from './HeaderBar';
import CardHolder from './CardHolder';
import Footer from './Footer';
import OpenCard from './OpenCard';
import { useAppDispatch } from './hooks/reduxHooks';
import { setCovers, setLoading, setError } from './features/coversSlice';
// import { useSelector } from 'react-redux';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useGetCustomCoversQuery, useGetDefaultCoversQuery } from './services/apiDataFetch';

// interface RootState {
//   coversFetch: {
//     getDefaultCovers: {
//       data: Data | null;
//       isLoading: boolean;
//       error: FetchBaseQueryError | null;
//     };
//   };
// }

const Header = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [showOverlay, setShowOverlay] = useState(false);
  const [cardOpen, setCardOpen] = useState<{ index: number; url: string } | null>(null);
  const dispatch = useAppDispatch();
  const { data: customData, error: customError } = useGetCustomCoversQuery('');
  const { data: defaultData, isLoading, error: defaultError } = useGetDefaultCoversQuery(undefined);

  const handleOverlayClick = (index: number, url: string) => {
    setShowOverlay(true);
    setCardOpen({ index, url });
  };

  const handleClosure = () => {
    setShowOverlay(false);
  };

  useEffect(() => {
    function handleFetchError(error: FetchBaseQueryError) {
      dispatch(setError(error.status));
      dispatch(setLoading(false));
      alert(error.status);
    }
    if (defaultData || customData) {
      let data;
      customData ? (data = customData) : (data = defaultData);
      dispatch(setCovers(data));
      dispatch(setLoading(false));
      if (data?.results.length === 0) {
        alert('no results for your request');
      }
    }
    if (defaultError || customError) {
      let error: FetchBaseQueryError;
      if (customError && 'status' in customError) {
        error = customError;
        handleFetchError(error);
      } else if (defaultError && 'status' in defaultError) {
        error = defaultError;
        handleFetchError(error);
      }
    }
  }, [customData, defaultData, customError, defaultError, dispatch]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const HandleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter' && searchValue.length !== 0) {
      const newRequest =
        'https://api.unsplash.com/search/photos?query=' +
        searchValue +
        '&client_id=6adFL1um8JXRIrgsfChxvwqAc_f1MVYZKe5lOBtuSek';
      customData?.refetch(newRequest);
      if (customData) {
        dispatch(setCovers(customData));
        dispatch(setLoading(false));
        if (customData.results.length === 0) {
          alert('no results for your request');
        }
      }
      if (customError && 'message' in customError) {
        dispatch(setError(customError.message));
        dispatch(setLoading(false));
        alert(customError.message);
      }
      if (customError && 'status' in customError) {
        dispatch(setError(customError.status));
        dispatch(setLoading(false));
        alert(customError.status);
      }
    }
  };

  return (
    <div className="container">
      {showOverlay && <OpenCard data={cardOpen} onCrossClick={handleClosure} />}
      <HeaderBar onSearchChange={handleSearchChange} onKeyPress={HandleKeyPress} />
      {isLoading && (
        <div className="loading-container">
          <span>Loading...</span>
          <div className="loading-bg"></div>
        </div>
      )}
      {defaultData && <CardHolder covers={defaultData} onCardClick={handleOverlayClick} />}
      {/* {customData && <CardHolder covers={customData} onCardClick={handleOverlayClick} />} */}
      <Footer />
    </div>
  );
};

export default Header;
