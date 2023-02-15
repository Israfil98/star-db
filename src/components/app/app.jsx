import React, { Component } from 'react';

import './app.css';

import SwapiService from '../../services/swapi-service';
import Header from '../header/header';
import ItemList from '../item-list/item-list';
import PeoplePage from '../people-page/people-page';
import PersonDetails from '../person-details/person-details';
import RandomPlanet from '../random-planet/random-planet';

class App extends Component {
  state = {};

  swapiService = new SwapiService();

  render() {
    return (
      <div className="app">
        <Header />
        <RandomPlanet />

        <PeoplePage />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onItemSelected}
              getData={this.swapiService.getAllPlanets}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails selectedPerson={this.state.selectedItem} />
          </div>
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onItemSelected}
              getData={this.swapiService.getAllStarships}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails selectedPerson={this.state.selectedItem} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
