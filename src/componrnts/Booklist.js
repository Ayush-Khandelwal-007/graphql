import React, { useState } from 'react'
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';



function Booklist(props) {

    console.log(props);
    const [selected, setSelected] = useState(null);


    function displayBooks(){
        var data = props.data;
        if(data.loading){
            return( <div>Loading books...</div> );
        } else {
            return data.books.map(book => {
                return(
                    <li key={ book.id } onClick={ (e) => setSelected( book.id ) }>{ book.name }</li>
                );
            })
        }
    }

    return (
        <div className="BooklistConatiner">
            <ul className="Booklist">
                {
                   displayBooks()
                }
            </ul>

            <BookDetails bookId={selected} />
        </div>
    )
}

export default graphql(getBooksQuery)(Booklist);