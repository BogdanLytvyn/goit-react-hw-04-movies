import axios from 'axios';

export const getTrendingMovies = () => {
  try {
    return axios.get(
      `${process.env.REACT_APP_DATA_BASEURL}/trending/movie/day?api_key=${process.env.REACT_APP_KEY}`,
    );
  } catch (error) {
    console.log(error);
  }
};

export const getSearchMovies = query => {
  try {
    axios.get(
      `${process.env.REACT_APP_DATA_BASEURL}/search/movie?api_key=${process.env.REACT_APP_KEY}&query=${query}`,
    );
  } catch (error) {
    console.log(error);
  }
};

export const getMoviesDetails = movieID => {
  try {
    axios.get(
      `${process.env.REACT_APP_DATA_BASEURL}/movie/${movieID}?api_key=${process.env.REACT_APP_KEY}`,
    );
  } catch (error) {
    console.log(error);
  }
};
