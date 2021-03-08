import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export default class Cast extends Component {
  state = {
    cast: [],
  };
  async componentDidMount() {
    const { movieID } = this.props.match.params;
    const res = await axios.get(
      `${process.env.REACT_APP_DATA_BASEURL}/movie/${movieID}/credits?api_key=${process.env.REACT_APP_KEY}`,
    );
    this.setState({ cast: res.data.cast });
  }

  render() {
    const { cast } = this.state;
    return (
      <>
        <ul>
          {cast.map(movie => (
            <li key={uuidv4()}>
              {movie.profile_path && (
                <img
                  src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.profile_path}`}
                  alt="Photo title"
                />
              )}
              <h2>{movie.name}</h2>
              <h3>{movie.character}</h3>
            </li>
          ))}
        </ul>
      </>
    );

    // return <div></div>;
  }
}
