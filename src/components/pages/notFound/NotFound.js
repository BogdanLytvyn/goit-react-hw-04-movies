import React, { Component } from 'react';
import style from './Notfound.module.scss';

export default class NotFound extends Component {
  render() {
    return (
      <div className={style.box}>
        <h2 className={style.title}>404 not found</h2>
      </div>
    );
  }
}
