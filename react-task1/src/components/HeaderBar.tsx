import Search from './Search';
import { Link } from 'react-router-dom';

interface HeaderBarProps {
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const HeaderBar = (props: HeaderBarProps) => {
  return (
    <div className="header-bar">
      <div className="buttons">
        <Link to="/">
          <button className="main">Main</button>
        </Link>
        <Link to="/aboutus">
          <button className="about">About us</button>
        </Link>
        <Link to="/forms">
          <button className="forms">Forms</button>
        </Link>
      </div>
      <Search onSearchChange={props.onSearchChange} />
    </div>
  );
};

export default HeaderBar;
