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

  const handleOverlayClick = (index: number, url: string) => {
    setShowOverlay(true);
    alert(`Card ${index} was clicked with URL ${url}`);
  };

  const basicUrl =
    'https://api.unsplash.com/search/photos?query=gloomy+sky&client_id=6adFL1um8JXRIrgsfChxvwqAc_f1MVYZKe5lOBtuSek';

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
      })
      .catch((error) => {
        if (error) {
          alert(error.message);
        }
      });
  }, []);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    const storedSearchValue = localStorage.getItem('searchValue');
    if (storedSearchValue) {
      setSearchValue(storedSearchValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('searchValue', searchValue);
  }, [searchValue]);

  // const filteredCards =
  //   searchValue.trim() === ''
  //     ? cards
  //     : cards.filter(
  //         (card: Card) =>
  //           card.name.toLowerCase().includes(searchValue.toLowerCase()) ||
  //           card.genre.toLowerCase().includes(searchValue.toLowerCase()) ||
  //           card.date.includes(searchValue.toLowerCase())
  //       );
  console.log(showOverlay);
  return (
    <div className="container">
      {showOverlay && <OpenCard />}
      <HeaderBar onSearchChange={handleSearchChange} />
      {covers && <CardHolder covers={covers} onCardClick={handleOverlayClick} />}
      <Footer />
    </div>
  );
};

export default Header;
