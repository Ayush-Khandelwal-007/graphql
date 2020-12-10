import React from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries';

function BookDetails(props) {
  console.log(props)

  function displayBookDetails() {
    const { book } = props.data;
    if (book) {
      return (
        <>
          <h2>{book.name}</h2>
          <h3>Genre: {book.genre}</h3>
          <h3>Author: {book.author.name}</h3>
          <h4>All books by this author:</h4>
          <ul className="other-books">
            {book.author.books.map(item => {
              return <li key={item.id}>{item.name}</li>
            })}
          </ul>
        </>
      );
    } else {
      return (<div>No book selected...</div>);
    }
  }
  return (
    <div className="BookDetails">
      {
        displayBookDetails()
      }
    </div>
  )
}

export default graphql(getBookQuery, {
  options: (props) => {
      return {
          variables: {
              id: props.bookId
          }
      }
  }
})(BookDetails);