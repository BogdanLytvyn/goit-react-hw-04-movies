import { React, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBarMovie from './appBar/AppBarMovie';
import NotFound from './pages/notFound/NotFound';
import { routes } from '../routes';
import Loader from './spinner/Spinner';
import { v4 as uuidv4 } from 'uuid';

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
          {routes.map(({ path, component, exact }) => (
            <Route
              exact={exact}
              path={path}
              component={component}
              key={uuidv4()}
            />
          ))}
        </Switch>
      </Suspense>
    </>
  );
}
