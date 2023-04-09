import Search from './components/Search';
import { render, screen } from '@testing-library/react';

describe('Search component', () => {
  test('search bar to be rendered', () => {
    const mockSearchChange = jest.fn();
    const mockKeyPress = jest.fn();
    render(<Search onSearchChange={mockSearchChange} onKeyPress={mockKeyPress} />);
    const searchBar = screen.getByPlaceholderText('Set custom covers for the albums!');
    expect(searchBar).toBeInTheDocument;
  });
});
