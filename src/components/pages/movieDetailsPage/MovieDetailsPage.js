import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Cast from '../../cast/Cast';
import Reviews from '../../reviews/Reviews';
import axios from 'axios';
import CardMovie from '../../cardMovie/CardMovie';
import routes from '../../../routes';
import style from './MovieDetailsPage.module..scss';

export default class MovieDetailsPage extends Component {
  state = {
    poster_path: '',
    original_title: '',
    overview: '',
    genres: [],
    vote_average: null,
    movies: [],
    release_date: '',
  };

  async componentDidMount() {
    const { movieID } = this.props.match.params;
    const res = await axios.get(
      `${process.env.REACT_APP_DATA_BASEURL}/movie/${movieID}?api_key=${process.env.REACT_APP_KEY}`,
    );
    let movieGenres = [];
    res.data.genres.forEach(el => {
      movieGenres.push(' ' + el.name);
    });

    this.setState({
      ...res.data,
      genres: movieGenres,
      poster_path: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${res.data.poster_path}`,
      movies: res.data,
    });
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const { match } = this.props;
    const release_datere = this.state.release_date.substring(0, 4);

    return (
      <div className={style.box}>
        <div className="buttonBack">
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={this.handleGoBack}
          >
            Back
          </button>
        </div>
        <div>
          <CardMovie
            movieCard={this.state}
            release_datere={release_datere}
          ></CardMovie>
        </div>
        <ul className="list-details">
          <li className="list-details-item">
            <Link to={`${match.url}/cast`}>
              <button type="button" className="btn btn-outline-dark">
                Cast
              </button>
            </Link>
          </li>
          <li className="list-details-item">
            <Link to={`${match.url}/reviews`}>
              <button type="button" className="btn btn-outline-dark">
                Reviews
              </button>
            </Link>
          </li>
        </ul>
        <div>
          <Switch>
            <Route path={`${match.path}/cast`} component={Cast}></Route>
            <Route path={`${match.path}/reviews`} component={Reviews}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}
