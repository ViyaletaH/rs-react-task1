import '../myStyles.css';
import React, { Component } from 'react';
import HeaderBar from './HeaderBar';
import CardHolder from './CardHolder';
import Footer from './Footer';
import { cards, Card } from './data/cards';

class Header extends Component {
  state = {
    searchValue: '',
    cards,
  };

  handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ searchValue: event.target.value });
  };

  componentDidMount() {
    const searchValue = localStorage.getItem('searchValue');
    if (searchValue) {
      this.setState({ searchValue });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('searchValue', this.state.searchValue);
  }

  render() {
    const { cards, searchValue } = this.state;

    const filteredCards = cards.filter(
      (card: Card) =>
        card.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        card.genre.toLowerCase().includes(searchValue.toLowerCase()) ||
        card.date.includes(searchValue.toLowerCase())
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
