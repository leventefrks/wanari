import React, {Component} from 'react';
import Footer from '../dashboard/footer';
import Modal from '../modal/modal';
import Logo from '../../data/wanari-logo.png';
import airports from '../../data/airports';
import openSkyAPI from '../../data/openskyApi';
import axios from 'axios';
import moment from 'moment';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onLogout = () => {
    this
      .props
      .history
      .push('/');
  }

  queryFlightInfo = e => {
    e.preventDefault();

    this.setState({
      isOpen: !this.state.isOpen
    });

    const currentAirport = e.currentTarget.dataset.city;
    const currentIcao24 = e.currentTarget.dataset.icao24;
    console.log('query flight info  --- ' + currentAirport + ' - ' + currentIcao24);

    const startDate = moment().unix();
    const endDate = moment()
      .subtract(1, 'hours')
      .unix();

    const url = `https://${openSkyAPI.username}:${openSkyAPI.password}@${openSkyAPI.baseUrl}/flights/arrival?airport=${currentIcao24}&begin=1517227200&end=1517230800`;

    axios
      .get(url)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
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
                    href=""
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
        <Footer/>
        <Modal show={this.state.isOpen} onClose={this.toggleModal}>
          
        </Modal>
      </div>
    );
  }
}