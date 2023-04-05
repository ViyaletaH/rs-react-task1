import '../myStyles.css';
import { useState, useEffect, ChangeEvent } from 'react';
import HeaderBar from './HeaderBar';
import CardHolder from './CardHolder';
import Footer from './Footer';
import { cards, Card } from './data/cards';

const Header = () => {
  const [searchValue, setSearchValue] = useState<string>('');

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

  const filteredCards = cards.filter(
    (card: Card) =>
      card.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      card.genre.toLowerCase().includes(searchValue.toLowerCase()) ||
      card.date.includes(searchValue.toLowerCase())
  );

  return (
    <div className="container">
      <HeaderBar onSearchChange={handleSearchChange} />
      <CardHolder cards={filteredCards} />
      <Footer />
    </div>
  );
};

export default Header;
