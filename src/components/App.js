import { React, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBarMovie from './appBar/AppBarMovie';
import { routes } from '../routes/routes';
import Loader from './spinner/Spinner';
import { v4 as uuidv4 } from 'uuid';

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
