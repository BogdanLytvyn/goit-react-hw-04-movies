import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.scss';
import { mainRoutes } from '../../../routes/mainRoutes';
import { v4 as uuidv4 } from 'uuid';

export default function Navigation() {
  return (
    <div className={style.box}>
      <ul className={style.navigation}>
        {mainRoutes.map(({ name, to, exact }) => (
          <li className={style.navItem} key={uuidv4()}>
            <NavLink
              exact={exact}
              to={to}
              className={style.navLink}
              activeClassName={style.activeNavLink}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
