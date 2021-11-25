import React from "react";
import {connect} from "react-redux";
import BookList from "./BookList";
import {fetchingToggle, loadMore} from "../../redux/reducer";

class BookListContainer extends React.Component {
    render() {
        const {state} = this.props;
        return (
            <BookList state={state}/>
        );
    }
};

const mapStateToProps = (state) => ({
    books: state.appState.books,
    totalItems: state.appState.totalItems,
    startIndex: state.appState.startIndex,
    searchField: state.appState.searchField,
    subject: state.appState.subject,
    sortingMethod: state.appState.sortingMethod,
    isFetching: state.appState.isFetching,
});

export default BookListContainer = connect(mapStateToProps, {loadMore, fetchingToggle})(BookList);
