import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';
import './item-list.css';

export default class ItemList extends Component {
  state = {
    people: null,
  };

  swapiService = new SwapiService();

  componentDidMount() {
    this.swapiService.getAllPeople().then((people) => {
      this.setState({ people });
    });
  }

  renderList(arr) {
    return arr.map((item) => {
      return (
        <li
          className="list-group-item"
          key={item.id}
          onClick={() => this.props.onItemSelected(item.id)}>
          {item.name}
        </li>
      );
    });
  }

  render() {
    const { people } = this.state;

    if (!people) {
      return <Spinner />;
    }

    const list = this.renderList(people);

    return <ul className="item-list list-group">{list}</ul>;
  }
}
