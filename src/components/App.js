import { React, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBarMovie from './appBar/AppBarMovie';
import NotFound from './pages/notFound/NotFound';
import routes from '../routes';
import Loader from './spinner/Spinner';

const HomePage = lazy(() =>
  import('./pages/homePages/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./pages/moviesPage/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/movieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movies-Details-page" */
  ),
);

export default function App() {
  return (
    <>
      <AppBarMovie></AppBarMovie>
      <Suspense
        fallback={
          <div>
            <Loader></Loader>
          </div>
        }
      >
        <Switch>
          <Route exact path={routes.home} component={HomePage}></Route>
          <Route exact path={routes.movies} component={MoviesPage}></Route>
          <Route path={routes.movieDetals} component={MovieDetailsPage}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Suspense>
    </>
  );
}
