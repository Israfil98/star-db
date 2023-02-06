import React, { Component } from 'react';

import './app.css';

import Header from '../header/header';
import PeoplePage from '../people-page/people-page';
import RandomPlanet from '../random-planet/random-planet';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <RandomPlanet />

        <PeoplePage />
      </div>
    );
  }
}

export default App;
