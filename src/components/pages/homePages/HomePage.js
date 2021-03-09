import React, { Component } from 'react';
import { getTrendingMovies } from '../../services/searchAPI';
import MovieList from '../../movieList/MovieList';
import style from './HomePage.module.scss';

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    getTrendingMovies().then(res =>
      this.setState({ movies: res.data.results }),
    );
  }

  render() {
    return (
      <>
        <div className={style.boxCardList}>
          <h1 className={style.title}>Trending today</h1>
          <MovieList movies={this.state.movies}></MovieList>
        </div>
      </>
    );
  }
}
