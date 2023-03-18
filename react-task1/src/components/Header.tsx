import '../myStyles.css';
import React, { Component } from 'react';
import HeaderBar from './HeaderBar';
import CardHolder from './CardHolder';
import Footer from './Footer';
import '../myStyles.css';

class Header extends Component {
  render() {
    return (
      <div className="container">
        <HeaderBar />
        <CardHolder />
        <Footer />
      </div>
    );
  }
}

export default Header;
