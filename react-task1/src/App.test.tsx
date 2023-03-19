import { cards } from './components/data/cards';
import Search from './components/Search';
import CardHolder from './components/CardHolder';
import { render, screen } from '@testing-library/react';

describe('Cards holder', () => {
  test('cards to be rendered', () => {
    const mockfilteredCards = cards;
    render(<CardHolder cards={mockfilteredCards} />);
    const crenderCards = screen.getByTestId(1);
    expect(crenderCards).toBeInTheDocument;
  });
});

describe('Search component', () => {
  test('search bar to be rendered', () => {
    const mockSearchChange = jest.fn();
    render(<Search onSearchChange={mockSearchChange} />);
    const searchBar = screen.getByPlaceholderText("I'm looking for...");
    expect(searchBar).toBeInTheDocument;
  });
});
