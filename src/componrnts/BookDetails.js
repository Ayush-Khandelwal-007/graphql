import React from 'react'
import { gql } from '@apollo/client';
import { graphql } from 'react-apollo';


const getBookQuery = gql`
query GetBook($id: String!){
    book(id:$id)
    {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

function BookDetails(props) {
    console.log(props)
    // const displayBookDetails=()=>{
    //     const { book } =props.data;
    //     if(book){
    //         return(
    //             <div>
    //                 <h2>{ book.name }</h2>
    //                 <p>{ book.genre }</p>
    //                 <p>{ book.author.name }</p>
    //                 <p>All books by this author:</p>
    //                 <ul className="other-books">
    //                     { book.author.books.map(item => {
    //                         return <li key={item.id}>{ item.name }</li>
    //                     })}
    //                 </ul>
    //             </div>
    //         );
    //     } else {
    //         return( <div>No book selected...</div> );
    //     }
    // }

    return (
        <div className="BookDetails">
            {/* {
               displayBookDetails()
           } */}
        </div>
    )
}

export default graphql(getBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.bookid
            }
        }
    }
})(BookDetails)