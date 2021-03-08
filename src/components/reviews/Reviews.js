import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import style from './Reviews.module.scss';

export default class Reviews extends Component {
  state = {
    results: [],
  };
  async componentDidMount() {
    const { movieID } = this.props.match.params;
    const res = await axios.get(
      `${process.env.REACT_APP_DATA_BASEURL}/movie/${movieID}/reviews?api_key=${process.env.REACT_APP_KEY}`,
    );
    this.setState({ ...res.data });
  }

  render() {
    const { results } = this.state;

    return (
      <div className={style.box}>
        {results.length > 0 ? (
          <ul className={style.list}>
            {results.map(review => (
              <li key={uuidv4()}>
                <h3 className={style.title}>{review.author}</h3>
                <p className={style.content}>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
        {results === 0 && <p>We don't have any reviews for this movie</p>}
      </div>
    );
  }
}
