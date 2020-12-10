import React, { useState } from 'react'
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import BookDetails from'./BookDetails'

export const getBooksQuery = gql`
{
    books{
        name
        id
    }
}
`;

function Booklist(props) {

    const [selected, setSelected] = useState(null);

    return (
        <div className="BooklistConatiner">
            <ul className="Booklist">
                {
                    props.data.loading ? (
                        <h3>Loading Data</h3>
                    ) : (
                            props.data.books.map(book => {
                                return (<li key={book.id} onClick={() => setSelected(book.id)} >{book.name}</li>);
                            })
                        )
                }
            </ul>

            <BookDetails bookId={selected} />
        </div>
    )
}

export default graphql(getBooksQuery)(Booklist);
