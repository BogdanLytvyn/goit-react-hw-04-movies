import React, { Component } from 'react';
import MovieList from '../../movieList/MovieList';
import axios from 'axios';
import qs from 'query-string';
import style from './MoviesPage.module.scss';

export default class MoviesPage extends Component {
  state = {
    total_pages: 1,
    query: '',
    movies: [],
  };

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      this.onQuerySearch(this.state.query);
    }
  }
  componentDidMount() {
    const { query } = qs.parse(this.props.location.search);
    if (query) {
      this.onQuerySearch(query);
    }
  }

  onQuerySearch = async query => {
    const res = await axios.get(
      `${process.env.REACT_APP_DATA_BASEURL}/search/movie?api_key=${process.env.REACT_APP_KEY}&query=${query}`,
    );

    this.setState({
      movies: res.data.results,
      total_pages: res.data.total_pages,
    });
  };

  handlerInput = e => {
    if (!e.target.value) {
      this.setState({
        total_pages: 1,
      });
    }
    this.setState({ query: e.target.value });
  };

  handlerSubmit = e => {
    e.preventDefault();
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${this.state.query}`,
    });
  };

  render() {
    const { query } = this.state;
    return (
      <div className="formBox">
        <form className={style.formMovie} onSubmit={this.handlerSubmit}>
          <input
            className="inputMovie"
            id="standard-search"
            label="Search field"
            type="search"
            autoComplete="off"
            autoFocus
            placeholder="movie name"
            aria-label="Search"
            value={query}
            onChange={this.handlerInput}
          />
          <button
            variant="outlined"
            color="primary"
            className="buttonMovie"
            type="submit"
          >
            Search
          </button>
        </form>
        Copy
        <MovieList movies={this.state.movies}></MovieList>
      </div>
    );
  }
}
