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
          <div
            key={card.cardId}
            data-testid={card.cardId}
            className="card"
            onClick={() => window.open(`${card.video}`, '_blank')}
          >
            <h2>
              {card.type}: {card.name}
            </h2>
            <img
              src={`/posters/${card.poster}.PNG`}
              className="poster"
              style={{
                backgroundImage:
                  card.poster !== '' ? `url( /${card.poster}.png)` : `url(./logo.png)`,
                backgroundPosition: 'center',
                backgroundSize: card.poster !== '' ? 'cover' : 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundColor: card.poster !== '' ? undefined : '#fff',
              }}
            />
            <p>Genre: {card.genre}</p>
            <p>Year: {card.year}</p>
            <p>Songs: {card.songs}</p>
            <p>Date of release: {card.date}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default CardHolder;
