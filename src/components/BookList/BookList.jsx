import BookCard from "../BookCard";

const BookList = (props) => {
    const {books} = props;

    if (books.length === 0) {
        return (<div>What kind of books do you want?</div>);
    }

    return (
        <div className="list">
            {
                props.books.map((book, i) => {
                    return <BookCard
                        key={i}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        title={book.volumeInfo.title}
                        authors={book.volumeInfo.authors}
                        publishedDate={book.volumeInfo.publishedDate}
                        categories={book.volumeInfo.categories}
                    />
                })
            }
        </div>
    )
}

export default BookList;