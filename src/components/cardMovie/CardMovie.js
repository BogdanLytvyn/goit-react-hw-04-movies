import React from 'react';

function CardMovie({ movieCard, release_datere }) {
  return (
    <div className="cardMovie">
      <div>
        <img src={movieCard.poster_path} alt="Photo title" />
      </div>
      <div>
        <h2>
          {movieCard.original_title} ({release_datere})
        </h2>
        <div>
          <h3>Overview</h3>
          <p className="overview">{movieCard.overview}</p>
        </div>
        <h3>Genres</h3>
        <p>{movieCard.genres}</p>
        <p>{movieCard.vote_average}</p>
      </div>
    </div>
  );
}

export default CardMovie;
