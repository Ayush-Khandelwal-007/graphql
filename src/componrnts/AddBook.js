import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';
import { flowRight as compose } from 'lodash';

function AddBook(props) {
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [authorId, setAuthorId] = useState('');

    const addBooktoDB = (e) => {
        e.preventDefault();

        if (name !== '' && genre !== '' && authorId !== '') {
            console.log(authorId);
            props.addBookMutation({
                variables: {
                    name: name,
                    genre: genre,
                    authorId: authorId,
                },
                refetchQueries: [{ query: getBooksQuery }]
            })
            setName('');
            setGenre('');
            setAuthorId('');
        }
        else {
            alert('Add a name , genre and author to the book');
        }
    }

    return (
        <form id="add-book" onSubmit={addBooktoDB}>
            <div className="field">
                <label>Book name:</label>
                <input type="text" value={name} onChange={(e) => {
                    setName(e.target.value);
                }} />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" value={genre} onChange={(e) => {
                    setGenre(e.target.value);
                }} />
            </div>
            <div className="field">
                <label>Author:</label>
                <select value={authorId} onChange={(e) => {
                    setAuthorId(e.target.value);
                }}>
                    <option>Select author</option>
                    {
                        props.getAuthorsQuery.loading ? (
                            <option disabled>Loading authors</option>
                        ) : (
                                props.getAuthorsQuery.authors.map(author => {
                                    return (<option key={author.id} value={author.id}>{author.name}</option>);
                                })
                            )
                    }
                </select>
            </div>
            <button>+</button>

        </form>
    )
}

export default compose(
    graphql(getAuthorsQuery, { name: 'getAuthorsQuery' }),
    graphql(addBookMutation, { name: 'addBookMutation' })
)(AddBook);
