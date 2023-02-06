import React, { Component } from 'react';

import './random-planet.css';

import SwapiService from '../../services/swapi-service';
import ErrorMessage from '../error-message/error-message';
import Spinner from '../spinner/spinner';

export default class RandomPlanet extends Component {
  state = {
    planet: {},
    loading: true,
    error: false,
    interval: null,
  };

  swapiService = new SwapiService();

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false });
  };

  onError = (err) => {
    this.setState({ error: true, loading: false });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25 + 2);

    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;

    const content = loading ? <Spinner /> : <PlanetView planet={planet} />;

    return (
      <div className="random-planet jumbotron rounded">
        {error ? <ErrorMessage /> : content}
      </div>
    );
  }
}

const PlanetView = (props) => {
  const { id, name, population, rotationPeriod, diameter } = props.planet;

  return (
    <>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt="planet"
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
