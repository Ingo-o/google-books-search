import React from "react";
import {connect} from "react-redux";
import BookList from "./BookList";
import {loadMoreBooks} from "../../redux/reducer";

class BookListContainer extends React.Component {
    render() {
        const {state} = this.props;
        return (
            <BookList state={state}/>
        );
    }
}

const mapStateToProps = (state) => ({
    books: state.books, totalItems: state.totalItems, startIndex: state.startIndex,
    searchingField: state.searchingField, subject: state.subject, sortingMethod: state.sortingMethod,
    isFetching: state.isFetching,
});

// eslint-disable-next-line no-unused-vars
export default BookListContainer = connect(mapStateToProps, {loadMoreBooks})(BookList);
