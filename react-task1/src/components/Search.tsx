interface SearchProps {
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = (props: SearchProps) => {
  return (
    <div className="searcher">
      <input
        type="text"
        placeholder="Set custom covers for the albums!"
        autoFocus
        className="search"
        onChange={props.onSearchChange}
      />
      <img src="/search.png" alt="search" className="search-icon" />
    </div>
  );
};

export default Search;
