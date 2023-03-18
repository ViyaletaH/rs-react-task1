import React, { Component } from 'react';

export class Search extends Component {
  handleSearch = (): void => {};

  render() {
    return (
      <div className="searcher">
        <input type="text" placeholder="I'm looking for..." autoFocus className="search" />
        <img src="/search.png" alt="search" className="search-icon" onClick={this.handleSearch} />
      </div>
    );
  }
}

export default Search;
