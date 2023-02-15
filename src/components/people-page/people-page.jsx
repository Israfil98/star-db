import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import ErrorMessage from '../error-message/error-message';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import './people-page.css';

export default class PeoplePage extends Component {
  state = {
    selectedItem: null,
    hasError: false,
  };

  swapiService = new SwapiService();

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  onItemSelected = (id) => {
    console.log('item clicked', id);
    this.setState({
      selectedItem: id,
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorMessage />;
    }

    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onItemSelected={this.onItemSelected}
            getData={this.swapiService.getAllPeople}
          />
        </div>
        <div className="col-md-6">
          <PersonDetails selectedPerson={this.state.selectedItem} />
        </div>
      </div>
    );
  }
}
