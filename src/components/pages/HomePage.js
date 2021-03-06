import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
// import getMovies from '../services/searchAPI';
import axios from 'axios';

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const res = await axios.get(
      `${process.env.REACT_APP_DATA_BASEURL}/trending/movie/day?api_key=${process.env.REACT_APP_KEY}`,
    );
    this.setState({ movies: res.data.results });
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
