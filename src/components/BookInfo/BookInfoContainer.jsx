import React from "react";
import {connect} from "react-redux";
import BookInfo from "./BookInfo";
import {withRouter} from "react-router-dom";
import {setTargetBook} from "../../redux/reducer";

class BookInfoContainer extends React.Component {
    render() {
        const {bookId} = this.props.match.params;
        const {books, targetBook} = this.props;
        return (
            <BookInfo books={books} bookId={bookId} />
        );
    }
}

const mapStateToProps = (state) => ({books: state.appState.books, targetBook: state.appState.targetBook});

const BookInfoContainerWithUrlData = withRouter(BookInfoContainer);

export default BookInfoContainer = connect(mapStateToProps, {setTargetBook})(BookInfoContainerWithUrlData);