import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class MoviesPage extends Component {
  state = {
    searchQuery: '',
    query: '',
    movies: [],
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      const { query } = this.state;
      const res = await axios.get(
        `${process.env.REACT_APP_DATA_BASEURL}/search/movie?api_key=${process.env.REACT_APP_KEY}&query=${query}`,
      );
      this.setState({ movies: res.data.results });
    }
  }

  handlerInput = e => {
    this.setState({ searchQuery: e.target.value });
  };

  handlerSubmit = e => {
    e.preventDefault();
    this.setState({ query: this.state.searchQuery });
  };

  render() {
    const { searchQuery, movies } = this.state;
    return (
      <>
        <form className="searchFom" onSubmit={this.handlerSubmit}>
          <input
            className="searchInput"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="movie name"
            aria-label="Search"
            value={searchQuery}
            onChange={this.handlerInput}
          />
          <button
            className="buttonForm"
            onSubmit={this.handlerSubmit}
            type="submit"
          >
            Search
          </button>
        </form>

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
