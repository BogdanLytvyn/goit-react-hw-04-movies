import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import MoviesPage from './pages/MoviesPage';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
      <ul className="navigation">
        <li>
          <NavLink
            exact
            to="/"
            className="NavLink"
            activeClassName="NavLink-active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className="NavLink"
            activeClassName="NavLink-active"
          >
            Movies
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/movie/:movieID" component={MovieDetailsPage}></Route>
        <Route exact path="/movies" component={MoviesPage}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </>
  );
}

// export default function App() {
//   return (
//     <>
//       <ul>
//         <li>
//           <NavLink
//             exact
//             to="/"
//             className="NavLink"
//             activeClassName="NavLink-active"
//           >
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/authors"
//             className="NavLink"
//             activeClassName="NavLink-active"
//           >
//             Autthors
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/books"
//             className="NavLink"
//             activeClassName="NavLink-active"
//           >
//             Books
//           </NavLink>
//         </li>
//       </ul>

//       <Switch>
//         <Route exact path="/" component={HomeView}></Route>
//         <Route path="/authors" component={AuthorsView}></Route>
//         <Route exact path="/books" component={BooksView}></Route>
//         <Route path="/books/:bookID" component={BookDetailsView}></Route>
//         <Route component={NotFound} />
//       </Switch>
//     </>
//   );
// }

// {
//        "KEY": "4fbdbd8abdbcde78896e194e86813212",
//        "baseURL": "https://api.themoviedb.org/3/"

// }
