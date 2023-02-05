import React, { Component } from 'react';

import './random-planet.css';

export default class RandomPlanet extends Component {
  render() {
    return (
      <div className="random-planet jumbotron rounded">
        <img
          className="planet-image"
          src={`https://starwars-visualguide.com/assets/img/planets/5.jpg`}
          alt="planet"
        />
        <div>
          <h4>Name</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>Population</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>Rotation</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>Diameter</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
