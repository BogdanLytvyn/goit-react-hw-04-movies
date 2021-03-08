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
