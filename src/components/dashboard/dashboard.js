import React, { Component } from 'react';
import Logo from '../../data/wanari-logo.png';
import airports from '../../data/airports';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
    
    }
  }

  queryFlightInfo = e => {
    e.preventDefault();
    console.log('query flight info  --- ' + e.currentTarget.dataset.city);
  }

    render() {
      let cities = airports.map((airport,id) =>
        <li key={id} className="flight-info__list__item">
          <a 
          className="flight-info__list__item__name" 
          data-city={airport}
          onClick={e => this.queryFlightInfo(e)}
          >{airport}
          </a>
        </li>  
    );

      return (
        <div>
        <main className="main">
            <header className="header header--fixed">
            <a href="http://www.wanari.com"><img src={Logo} className="logo" alt="wanari-logo"/></a>
            <nav className="header__navigation">
              <ul className="header__navigation-list">
              <li className="header__navigation-list__item">
                <a className="header__navigation-list__item-link" href="https://github.com/leventefrks/wanari">source code</a>
                  </li>
                <li className="header__navigation-list__item">
                <a className="header__navigation-list__item-link" href="http://www.leventefarkas.com">contact</a>
                </li>    
                </ul>
              </nav>
                </header>

                <div className="flight-info">
                  <ul className="flight-info__list">
                 {cities}
                 </ul>
                </div>
        </main>
            <footer className="footer">
            <span className="footer__copyright">
            Copyright 2018 |&nbsp; Levente Farkas
            </span>
          </footer>
          </div>
      );
    }
  }