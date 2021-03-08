import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import style from './MovieList.module.scss';

function MovieList({ movies, location }) {
  return (
    <ul className={style.movieList}>
      {movies.map(movie => (
        <li key={movie.id} className={style.cardMovie}>
          <Link
            to={{
              pathname: `/movie/${movie.id}`,
              state: {
                from: location,
              },
            }}
          >
            <img
              className={style.cardPic}
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
              alt="Photo title"
            />
            <h5 className={style.title}>{movie.title}</h5>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default withRouter(MovieList);
