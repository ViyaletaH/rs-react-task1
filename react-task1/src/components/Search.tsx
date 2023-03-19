import React, { Component } from 'react';

interface SearchProps {
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export class Search extends Component<SearchProps> {
  render() {
    const { onSearchChange } = this.props;

    return (
      <div className="searcher">
        <input
          type="text"
          placeholder="I'm looking for..."
          autoFocus
          className="search"
          onChange={onSearchChange}
        />
        <img src="/search.png" alt="search" className="search-icon" />
      </div>
    );
  }
}

export default Search;
