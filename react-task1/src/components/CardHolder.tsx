import React, { Component } from 'react';
import { Card } from './data/cards';

interface Cards {
  cards: Card[];
}

export class CardHolder extends Component<Cards> {
  render() {
    const { cards } = this.props;
    return (
      <div className="card-holder">
        {cards.map((card: Card) => (
          <div key={card.cardId} className="card">
            <h2>{card.name}</h2>
            <p>{card.poster}</p>
            <p>{card.genre}</p>
            <p>{card.year}</p>
            <p>{card.songs}</p>
            <p>{card.date}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default CardHolder;
