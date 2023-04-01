interface SearchProps {
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = (props: SearchProps) => {
  return (
    <div className="searcher">
      <input
        type="text"
        placeholder="I'm looking for..."
        autoFocus
        className="search"
        onChange={props.onSearchChange}
      />
      <img src="/search.png" alt="search" className="search-icon" />
    </div>
  );
};

export default Search;
