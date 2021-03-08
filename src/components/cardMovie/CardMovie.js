import React from 'react';
import style from './CardMovie.module.scss';

function CardMovie({ movieCard, release_datere }) {
  console.groupEnd(movieCard);
  return (
    <div className={style.box}>
      <div className={style.cardMovie}>
        <div>
          <img
            src={movieCard.poster_path}
            alt="Photo title"
            className={style.image}
          />
        </div>
        <div>
          <h2 className={style.title}>
            {movieCard.original_title} ({release_datere})
          </h2>
          <div>
            <h3 className={style.titleOverview}>Overview</h3>
            <p className={style.overview}>{movieCard.overview}</p>
          </div>
          <h3 className={style.genresTitle}>Genres</h3>
          <p className={style.genres}>{movieCard.genres}</p>
          <p className={style.rating}>Rating: {movieCard.vote_average}</p>
        </div>
      </div>
    </div>
  );
}

export default CardMovie;
