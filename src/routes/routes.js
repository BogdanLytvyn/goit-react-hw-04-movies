import HomePage from '../components/pages/homePages/HomePage';
import MoviesPage from '../components/pages/moviesPage/MoviesPage';
import MovieDetailsPage from '../components/pages/movieDetailsPage/MovieDetailsPage';
import NotFound from '../components/pages/notFound/NotFound';

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
