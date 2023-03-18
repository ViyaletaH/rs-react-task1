import React, { Component } from 'react';
import Search from './Search';
import { Link } from 'react-router-dom';

export class HeaderBar extends Component {
  render() {
    return (
      <div className="header-bar">
        <Link to="/aboutus">
          <button className="about">About us</button>
        </Link>
        <Search />
      </div>
    );
  }
}

export default HeaderBar;
