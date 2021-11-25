import BookCard from "../BookCard";
import {getBooksAJAX} from "../../api";
import preloader from "../../assets/preloader.svg";
import React from "react";

const BookList = (props) => {
    const {
        books,
        totalItems,
        startIndex,
        loadMore,
        searchField,
        subject,
        sortingMethod,
        isFetching,
        fetchingToggle,
    } = props;

    const loadMoreBooks = (e) => {
        e.preventDefault();
        fetchingToggle(true);
        getBooksAJAX(searchField, subject, sortingMethod, startIndex + 2 )
            .then(response => {
                if (response === 'STOP') {
                    alert('Sorry, there are no more books on your request.')
                    return
                }
                fetchingToggle(false);
                loadMore(response.items, startIndex);
            })
    }

    if (books.length === 0) {
        return (<div>What kind of books do you want?</div>);
    }

    return (
        <div>
            <div>Total items: {totalItems}</div>
            <div className="list">
                {
                    books.map((book) => {
                        return <BookCard
                            key={book.id}
                            volumeInfo={book.volumeInfo}
                        />
                    })
                }
            </div>
            {isFetching ? <img src={preloader} alt='preloader'/> : null}
            <button onClick={loadMoreBooks}>Load more</button>
        </div>
    )
}

export default BookList;