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
            <div className={css.inscription}>What kind of book do you want?</div>
        );
    }

    return (
        <div>
            <div className={css.inscription}>Total items: {totalItems}</div>
            <div className={css.booksContainer}>
                {
                    books.map((book) => {
                        return <BookCard key={book.id} volumeInfo={book.volumeInfo}/>
                    })
                }
            </div>
            <div className={css.loadMore}>
                <button className={css.button} onClick={loadMoreBooksThunk}>Load more</button>
                <div>{isFetching ? <Preloader/> : null}</div>
            </div>
        </div>
    )
}

export default BookList;
