import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '@/styles/Header.scss';

class Header extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/interactive-plat-map">Interactive Plat Map</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Header;
