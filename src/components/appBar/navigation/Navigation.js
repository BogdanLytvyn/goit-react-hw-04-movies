import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import routes from '../../../routes';
import style from './Navigation.module.scss';

export default function Navigation() {
  return (
    <div className={style.box}>
      <ul className={style.navigation}>
        <li className={style.navItem}>
          <NavLink
            exact
            to={routes.home}
            className={style.NavLink}
            activeClassName={style.NavLinkActive}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.movies}
            className={style.NavLink}
            activeClassName={style.NavLinkActive}
          >
            MOVIES
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
