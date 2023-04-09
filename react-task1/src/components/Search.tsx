interface SearchProps {
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Search = (props: SearchProps) => {
  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    props.onKeyPress(event);
  };

  return (
    <div className="searcher">
      <input
        type="text"
        placeholder="Set custom covers for the albums!"
        autoFocus
        className="search"
        onChange={props.onSearchChange}
        onKeyPress={handleOnKeyDown}
      />
      <img src="/search.png" alt="search" className="search-icon" />
    </div>
  );
};

export default Search;
