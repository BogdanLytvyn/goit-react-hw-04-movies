import React, { Component } from 'react';
import axios from 'axios';

export default class MovieDetailsPage extends Component {
  state = {
    poster_path: '',
    original_title: '',
    overview: '',
    genres: '',
    vote_average: null,
    id: null,
  };

  async componentDidMount() {
    const { movieID } = this.props.match.params;
    const res = await axios.get(
      `${process.env.REACT_APP_DATA_BASEURL}/movie/${movieID}?api_key=${process.env.REACT_APP_KEY}`,
    );

    this.setState({
      ...res.data,
      genres: res.data.genres.find(genre => genre),
      poster_path: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${res.data.poster_path}`,
    });
  }

  render() {
    const {
      poster_path,
      original_title,
      overview,
      genres,
      vote_average,
    } = this.state;

    return (
      <>
        <img src={poster_path} alt="Photo title" />
        <h2>{original_title}</h2>
        <p>{genres.name}</p>
        <p>{vote_average}</p>
        <p>{overview}</p>
      </>
    );
  }
}

// import React, { Component } from 'react';
// import Axios from 'axios';

// export default class BookDetailsView extends Component {
//   state = {
//     authorId: null,
//     descr: null,
//     genre: null,
//     id: null,
//     imgUrl: null,
//     title: null,
//     author: null,
//   };

//   async componentDidMount() {
//     const { bookID } = this.props.match.params;
//     const res = await Axios.get(
//       `http://localhost:4040/books/${bookID}?_expand=author`,
//     );
//     this.setState({ ...res.data });
//   }
//   render() {
//     const { imgUrl, title, descr } = this.state;
//     return (
//       <>
//         <img src={imgUrl} alt="Photo title" />
//         <h2>{title}</h2>
//         {this.state.author && <p>Author: {this.state.author.name}</p>}
//         <p>{descr}</p>
//       </>
//     );
//   }
// }
