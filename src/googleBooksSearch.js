import React, { useState } from "react";
import axios from 'axios';
import BookCard from './components/BookCard';

const apiKey = "AIzaSyCCW4G79cXDkg04udhZN_BtFmr2aMz9kfE";

function googleBooksSearch() {
    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);


    function handleChange(event) {
        const book = event.target.value;
        setBook(book);
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}&maxResults=40`)
            .then(data => {
                console.log(data.data.items);
                setResult(data.data.items);
            })
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="card-header main-search">
                <div className="row">
                    <div className="col-12 col-md-3 col-xl-3">
                        <input onChange={handleChange} className="AutoFocus form-control" placeholder="Type something..." type="text" />
                    </div>
                    <div className="ml-auto">
                        <input type="submit" value="Search" className="btn btn-primary search-btn" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {result.map(book => (
                        <BookCard book={book}/>
                    ))}
                </div>
            </div>
        </form>

    )
}

export default googleBooksSearch
