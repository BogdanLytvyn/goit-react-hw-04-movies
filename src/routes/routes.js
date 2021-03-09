import { lazy } from 'react';
import NotFound from '../components/pages/notFound/NotFound';

const HomePage = lazy(() =>
  import(
    '../components/pages/homePages/HomePage' /* webpackChunkName: "home-page" */
  ),
);
const MoviesPage = lazy(() =>
  import(
    '../components/pages/moviesPage/MoviesPage' /* webpackChunkName: "movies-page" */
  ),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../components/pages/movieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movies-Details-page" */
  ),
);

export const routes = [
  {
    exact: true,
    path: '/',
    component: HomePage,
  },
  {
    exact: false,
    path: '/movies',
    component: MoviesPage,
  },
  {
    exact: false,
    path: '/movie/:movieID',
    component: MovieDetailsPage,
  },
  {
    component: NotFound,
  },
];
