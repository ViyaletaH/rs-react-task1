import React, { Component } from 'react';
import { cards } from './data/cards';

export class CardHolder extends Component {
  state = {
    cards,
    filteredCards: null,
    searchValue: '',
  };

  render() {
    return <div className="card-holder"></div>;
  }
}

export default CardHolder;
