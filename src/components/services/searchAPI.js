import axios from 'axios';

const getMovies = async movie => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_DATA_BASE_BASEURL}`,
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getMovies };
