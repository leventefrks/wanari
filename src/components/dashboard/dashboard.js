import React, { Component } from 'react';
import Logo from '../../data/wanari-logo.png';

export default class Dashboard extends Component {
    render() {
      return (
        <main className="main">
            <header className="header header--fixed">
            <a href="http://www.wanari.com"><img src={Logo} className="logo" alt="wanari-logo"/></a>
            <nav className="header__navigation">
              <ul className="header__navigation-list">
                <li className="header__navigation-list__item">
                <a className="header__navigation-list__item-link" href="http://www.leventefarkas.com">contact</a>
                </li>
                </ul>
              </nav>
                </header>
                <footer className="footer">
                    </footer>
        </main>
      );
    }
  }