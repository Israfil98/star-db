import React, { Component } from 'react';

import './app.css';

import Header from '../header/header';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import RandomPlanet from '../random-planet/random-planet';

class App extends Component {
  state = {
    selectedItem: null,
  };

  onItemSelected = (id) => {
    console.log('item clicked', id);
    this.setState({
      selectedItem: id,
    });
  };

  render() {
    return (
      <div className="app">
        <Header />
        <RandomPlanet />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onItemSelected} />
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
