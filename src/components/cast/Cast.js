import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import style from './Cast.module.scss';

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
      <div className={style.box}>
        <ul className={style.list}>
          {cast.map(movie => (
            <li key={uuidv4()} className={style.listItem}>
              {movie.profile_path && (
                <img
                  className={style.pic}
                  src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.profile_path}`}
                  alt="Photo title"
                />
              )}
              <h2 className={style.title}>{movie.name}</h2>
              <h3 className={style.role}>{movie.character}</h3>
            </li>
          ))}
        </ul>
      </div>
    );

    // return <div></div>;
  }
}
