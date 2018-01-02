import React, { Component } from 'react';
import Logo from '@/assets/nasa-logo.svg';
import Navigation from '@/components/Navigation';
import styles from '@/styles/Header.scss';

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className="columns is-mobile has-no-top-bottom-gap">
          <div className="column">
            <img className="is-inline-block logo" src={Logo} alt="NASA Logo" width="50"/>
          </div>
          <div className="column has-text-centered">
            <Navigation />
          </div>
          <div className="column has-text-right">
            <p className="is-inline is-hidden-mobile">Dave Berning</p>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
