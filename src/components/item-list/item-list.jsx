import React, { Component } from 'react';

import Spinner from '../spinner/spinner';
import './item-list.css';

export default class ItemList extends Component {
  state = {
    items: null,
  };

  componentDidMount() {
    const { getData } = this.props;
    getData().then((items) => {
      this.setState({ items });
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
    const { items } = this.state;

    if (!items) {
      return <Spinner />;
    }

    const list = this.renderList(items);

    return <ul className="item-list list-group">{list}</ul>;
  }
}
