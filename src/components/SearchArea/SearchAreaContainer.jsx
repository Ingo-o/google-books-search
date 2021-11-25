import React from "react";
import {connect} from "react-redux";
import {
    addFoundBooks, fetchingToggle, resetBooksAndIndex,
    setTotalItems,
    updateSearchFieldText,
    updateSortingMethod,
    updateSubject
} from "../../redux/reducer";
import SearchArea from "./SearchArea";

class SearchAreaContainer extends React.Component {
    render() {
        const {state} = this.props;
        return (
            <SearchArea state={state}/>
        );
    }
}

const mapStateToProps = (state) => ({
    searchField: state.appState.searchField,
    subject: state.appState.subject,
    sortingMethod: state.appState.sortingMethod,
    startIndex: state.appState.startIndex,
    isFetching: state.appState.isFetching,
});

export default SearchAreaContainer = connect(mapStateToProps, {
    updateSearchFieldText,
    updateSortingMethod,
    addFoundBooks,
    updateSubject,
    setTotalItems,
    resetBooksAndIndex,
    fetchingToggle,
})(SearchArea);
