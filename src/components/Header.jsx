import React, { Component } from 'react';
import AppNavigator from './AppNavigator';
import Logo from './../assets/logo-green.svg';
import MoreApps from './../assets/more-apps.svg';
import UserPhoto from './../assets/dave.jpg';
import { NavLink } from 'react-router-dom';
import '../styles/Header.scss';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="columns is-mobile has-no-top-bottom-gap">
          <div className="column">
            <img src={MoreApps} alt="More Apps" width="30"/>
          </div>
          <div className="column logo has-text-centered">
            <img src={Logo} alt="Drees Homes Logo"/>
          </div>
          <div className="column has-text-right">
            <p className="is-inline is-hidden-mobile">Dave Berning</p>
            <img class="is-inline is-rounded" src={UserPhoto} alt="Dave" width="30"/>
          </div>
        </div>
        <AppNavigator />
      </header>
    );
  }
}

export default Header;
