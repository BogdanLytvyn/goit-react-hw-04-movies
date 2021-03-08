import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MovieList from '../../movieList/MovieList';
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
    console.log(movies);
    return (
      <>
        <form className="searchFom" onSubmit={this.handlerSubmit}>
          <TextField
            id="standard-search"
            label="Search field"
            type="search"
            autoComplete="off"
            autoFocus
            placeholder="movie name"
            aria-label="Search"
            value={searchQuery}
            onChange={this.handlerInput}
          />
          <Button
            variant="outlined"
            color="primary"
            className="buttonForm"
            onSubmit={this.handlerSubmit}
            type="submit"
          >
            Search
          </Button>
        </form>
        <MovieList movies={this.state.movies}></MovieList>
      </>
    );
  }
}
