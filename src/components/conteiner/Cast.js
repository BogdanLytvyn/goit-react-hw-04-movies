import React from 'react';

export default function Cast() {
  return <div></div>;
}

// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function AuthorBooks({ books }) {
//   return (
//     <ul>
//       {books.map(book => (
//         <li key={book.id}>
//           <Link to={`/books/${book.id}`}>{book.title}</Link>
//         </li>
//       ))}
//     </ul>
//   );
// }

// import React, { Component } from 'react';

// export default class AuthorBooks extends Component {
//   state = {
//     books: [],
//   };
//   componentDidMount() {
//     // console.log('componentDidMount');
//     // console.log(Number(this.props.match.params.authorID.substr(1, 1)));
//     // console.log(this.props.authors);

//     const id = Number(this.props.match.params.authorID.substr(1, 1));
//     const books = this.props.authors.find(author => author.id === id);

//     this.setState(books);
//   }
//   // componentDidUpdate(prevProps, prevState) {
//   //   console.log('componentDidUpdate');
//   //   console.log(Number(this.props.match.params.authorID.substr(1, 1)));
//   //   console.log(this.props.authors);
//   // }

//   render() {
//     // const { books } = this.state;
//     return (
//       <>
//         <h2>Component book author</h2>
//         {/* <ul>
//           {books.map(book => (
//             <li key={book.id}> {book.title} </li>
//           ))}
//         </ul> */}
//       </>
//     );
//   }
// }
