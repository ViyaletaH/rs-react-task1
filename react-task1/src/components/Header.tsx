import '../myStyles.css';
import React, { Component } from 'react';
import HeaderBar from './HeaderBar';
import CardHolder from './CardHolder';
import Footer from './Footer';
import '../myStyles.css';
import { cards, Card } from './data/cards';

class Header extends Component {
  state = {
    searchValue: '',
    cards,
  };

  handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ searchValue: event.target.value });
  };

  render() {
    const { cards, searchValue } = this.state;

    const filteredCards = cards.filter(
      (card: Card) => card.name.toLowerCase().includes(searchValue.toLowerCase()) // card.genre.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
      <div className="container">
        <HeaderBar onSearchChange={this.handleSearchChange} />
        <CardHolder cards={filteredCards} />
        <Footer />
      </div>
    );
  }
}

export default Header;
