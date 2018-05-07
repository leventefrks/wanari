import React, {Component} from 'react';
// web app logo
import Logo from '../../data/wanari-logo.png';
// static data
import airports from '../../data/airports';
import baseOpenSkyApiUrl from '../../data/openskyApi';
import axios from 'axios';
import moment from 'moment';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentAirport: '',
      currentIcao24: ''
    }
  }

  queryFlightInfo = e => {
    e.preventDefault();

    const currentAirport = e.currentTarget.dataset.city;
    const currentIcao24 = e.currentTarget.dataset.icao24;
    //console.log('query flight info  --- ' + currentAirport + ' - ' + currentIcao24);
    //console.log('start', moment());
    //console.log('end', moment().subtract(8, 'hours'));
    //console.log(moment(1517227200).format());

    const startDate = moment(moment(), "M/D/YYYY H:mm").valueOf();
    const endDate = moment(moment().subtract(8,'hours'), "M/D/YYYY H:mm").valueOf();

    console.log(startDate);
    console.log(endDate);
    
    console.log(moment(startDate).format());
    console.log(moment(endDate).format());

    const fullDepartureUrl = `${baseOpenSkyApiUrl}/flights/departure?airport=${currentIcao24}&begin=${startDate}&end=${endDate}`;
    //const fullArrivalnUrl = `${baseOpenSkyApiUrl}/flights/arrival?airport=${currentIcao24}&begin=${startDate}&end=${endDate}`;

    axios
      .get(fullDepartureUrl)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  currentDate = () => {
    let currentDate = new Date();
  }

  onLogout = () => {
    this
      .props
      .history
      .push('/');
  }

  render() {

    let cities = airports.map((airport, id) => <li key={id} className="flight-info__list__item">
      <a
        className="flight-info__list__item__name"
        data-city={airport.name}
        data-icao24={airport.icao24}
        onClick={e => this.queryFlightInfo(e)}>{airport.name}
      </a>
    </li>);

    return (
      <div>
        <main className="main">
          <header className="header header--fixed">
            <a href="http://www.wanari.com"><img src={Logo} className="logo" alt="wanari-logo"/></a>
            <nav className="header__navigation">
              <ul className="header__navigation-list">
                <li className="header__navigation-list__item">
                  <a
                    className="header__navigation-list__item-link"
                    href="https://github.com/leventefrks/wanari"
                    target="_blank">source code</a>
                </li>
                <li className="header__navigation-list__item">
                  <a
                    className="header__navigation-list__item-link"
                    href="http://www.leventefarkas.com"
                    target="_blank">contact</a>
                </li>
                <li className="header__navigation-list__item">
                  <a
                    className="header__navigation-list__item-link"
                    href="#"
                    onClick={this.onLogout}>logout</a>
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