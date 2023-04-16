import '../myStyles.css';
import { useState, useEffect, ChangeEvent } from 'react';
import HeaderBar from './HeaderBar';
import CardHolder, { Data } from './CardHolder';
import Footer from './Footer';
import OpenCard from './OpenCard';
import { useAppDispatch } from './hooks/reduxHooks';
import { setCovers, setLoading, setError } from './features/coversSlice';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useGetDefaultCoversQuery, useGetCustomCoversQuery } from './services/apiDataFetch';
import { fetchCustomCovers } from './features/coversSlice';

const Header = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [showOverlay, setShowOverlay] = useState(false);
  const [cardOpen, setCardOpen] = useState<{ index: number; url: string } | null>(null);
  const dispatch = useAppDispatch();
  const [useCustomCovers, setUseCustomCovers] = useState(false);
  const { data: defaultData, error: defaultError } = useGetDefaultCoversQuery(undefined);
  const {
    data: customCovers,
    isLoading,
    error: customError,
  } = useGetCustomCoversQuery(searchValue);

  const handleOverlayClick = (index: number, url: string) => {
    setShowOverlay(true);
    setCardOpen({ index, url });
  };

  const handleClosure = () => {
    setShowOverlay(false);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleKeyPress = async (event: React.KeyboardEvent<HTMLInputElement>): Promise<void> => {
    if (event.key === 'Enter' && searchValue.length !== 0) {
      dispatch(fetchCustomCovers(searchValue));
      try {
        const response = await dispatch(fetchCustomCovers(searchValue));
        const customCovers = response.payload;
        setUseCustomCovers(true);
        if (customCovers && customCovers.results) {
          dispatch(setCovers(defaultData));
          dispatch(setLoading(false));
          if (defaultData?.results.length === 0) {
            alert('no results for your request');
          }
        }
      } catch (error) {
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
    }
  };

  useEffect(() => {
    function handleFetchError(error: FetchBaseQueryError) {
      dispatch(setError(error.status));
      dispatch(setLoading(false));
      alert(error.status);
    }
    if (useCustomCovers) {
      defaultData && { ...defaultData, results: customCovers?.results };
      dispatch(setCovers(defaultData));
      dispatch(setLoading(false));
      if (defaultData?.results.length === 0) {
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
  }, [customCovers, defaultData, customError, defaultError, dispatch, useCustomCovers]);

  let covers: Data = customCovers ?? defaultData ?? { results: [], total: 0, total_pages: 0 };
  if (customCovers && customCovers.results.length > 8) {
    covers = customCovers;
  } else {
    covers = defaultData || { results: [], total: 0, total_pages: 0 };
  }

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
      {defaultData && defaultData !== undefined && (
        <CardHolder covers={covers} onCardClick={handleOverlayClick} />
      )}
      <Footer />
    </div>
  );
};

export default Header;
