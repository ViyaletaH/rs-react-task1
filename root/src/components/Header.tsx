import '../myStyles.css';
import { useState, useEffect, ChangeEvent } from 'react';
import HeaderBar from './HeaderBar';
import CardHolder, { Data } from './CardHolder';
import Footer from './Footer';
import OpenCard from './OpenCard';

const Header = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [covers, setCovers] = useState<Data | null>(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [cardOpen, setCardOpen] = useState<{ index: number; url: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [basicUrl, setBasicUrl] = useState<string>(
    'https://api.unsplash.com/search/photos?query=gloomy+sky&client_id=6adFL1um8JXRIrgsfChxvwqAc_f1MVYZKe5lOBtuSek'
  );

  const handleOverlayClick = (index: number, url: string) => {
    setShowOverlay(true);
    setCardOpen({ index, url });
  };

  const handleClosure = () => {
    setShowOverlay(false);
  };

  useEffect(() => {
    const headers = new Headers({
      Authorization: 'Client-ID 6adFL1um8JXRIrgsfChxvwqAc_f1MVYZKe5lOBtuSek',
    });
    fetch(basicUrl, { headers })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCovers(data);
        setLoading(false);
        localStorage.setItem('basicUrl', basicUrl);
        if (data.results.length === 0) {
          alert('no results for your request');
        }
      })
      .catch((error) => {
        if (error) {
          alert(error.message);
        }
      });
  }, [basicUrl]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter' && searchValue.length !== 0) {
      const newRequest =
        'https://api.unsplash.com/search/photos?query=' +
        searchValue +
        '&client_id=6adFL1um8JXRIrgsfChxvwqAc_f1MVYZKe5lOBtuSek';
      setBasicUrl(newRequest);
    }
  };

  useEffect(() => {
    const storedBasicUrl = localStorage.getItem('basicUrl');
    if (storedBasicUrl) {
      setBasicUrl(storedBasicUrl);
    } else {
      setBasicUrl(
        'https://api.unsplash.com/search/photos?query=gloomy+sky&client_id=6adFL1um8JXRIrgsfChxvwqAc_f1MVYZKe5lOBtuSek'
      );
    }
  }, []);

  return (
    <div className="container">
      {showOverlay && <OpenCard data={cardOpen} onCrossClick={handleClosure} />}
      <HeaderBar onSearchChange={handleSearchChange} onKeyPress={handleKeyPress} />
      {loading && (
        <div className="loading-container">
          <span>Loading...</span>
          <div className="loading-bg"></div>
        </div>
      )}
      {covers && <CardHolder covers={covers} onCardClick={handleOverlayClick} />}
      <Footer />
    </div>
  );
};

export default Header;
