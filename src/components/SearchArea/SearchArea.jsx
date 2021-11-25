import {getBooksAJAX} from "../../api";
import preloader from "../../assets/preloader.svg";
import React from "react";

const SearchArea = (props) => {
    const {
        searchField, subject, sortingMethod, resetBooksAndIndex, startIndex, isFetching,
        updateSearchFieldText, updateSortingMethod, addFoundBooks, updateSubject, setTotalItems, fetchingToggle,
    } = props;

    const addNewText = (e) => updateSearchFieldText(e.target.value);

    const choseSortingMethod = (e) => {
        updateSortingMethod(e.target.value);
    }

    const choseSubject = (e) => {
        updateSubject(e.target.value);
    }

    const searchBooks = (e) => {
        e.preventDefault();
        resetBooksAndIndex()
        fetchingToggle(true);
        getBooksAJAX(searchField, subject, sortingMethod, startIndex)
            .then(response => {
                if (response === 'STOP') {
                    alert('Sorry, there are no books on your request.');
                    fetchingToggle(false);
                    return;
                }
                fetchingToggle(false);
                addFoundBooks(response.items);
                setTotalItems(response.totalItems);
            })
    }

    return (
        <div className="search-area">
            <form onSubmit={searchBooks}>
                <input onChange={addNewText} type="text" value={searchField}/>
                <button type="submit">Search</button>
                <select defaultValue="relevance" onChange={choseSortingMethod}>
                    <option value="relevance">Relevance</option>
                    <option value="newest">Newest</option>
                </select>
                <select defaultValue="all" onChange={choseSubject}>
                    <option value="all">All</option>
                    <option value="art">Art</option>
                    <option value="biography">Biography</option>
                    <option value="computers">Computers</option>
                    <option value="history">History</option>
                    <option value="medical">Medical</option>
                    <option value="poetry">Poetry</option>
                </select>
            </form>
            {isFetching ? <img src={preloader} alt='preloader'/> : null}
        </div>
    )
}

export default SearchArea;