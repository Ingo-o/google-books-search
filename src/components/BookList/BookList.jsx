import React from "react";
import css from "./BookList.module.css";
import BookCard from "./BookCard/BookCard";
import Preloader from "../../common/Preloader";

const BookList = (props) => {
    const {
        books, totalItems, startIndex, searchingField,
        subject, sortingMethod, isFetching, loadMoreBooks,
    } = props;

    const loadMoreBooksThunk = (e) => {
        e.preventDefault();
        loadMoreBooks(searchingField, subject, sortingMethod, startIndex + 30);
    }

    if (books.length === 0) {
        return (
            <div>What kind of books do you want?</div>
        );
    }

    return (
        <div>
            <div>Total items: {totalItems}</div>
            <div>
                {
                    books.map((book) => {
                        return <BookCard key={book.id} volumeInfo={book.volumeInfo}/>
                    })
                }
            </div>
            {isFetching ? <Preloader/> : null}
            <button onClick={loadMoreBooksThunk}>Load more</button>
        </div>
    )
}

export default BookList;
