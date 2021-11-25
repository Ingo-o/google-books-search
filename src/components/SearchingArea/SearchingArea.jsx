import React from "react";
import css from "./SearchingArea.module.css";
import Preloader from "../../common/Preloader";

const SearchingArea = (props) => {
    const {
        searchingField, subject, sortingMethod, startIndex, isFetching, searchBooks,
        updateSearchingFieldText, updateSortingMethod, updateSubject,
    } = props;

    const addNewText = (e) => updateSearchingFieldText(e.target.value);

    const choseSortingMethod = (e) => updateSortingMethod(e.target.value);

    const choseSubject = (e) => updateSubject(e.target.value);

    const searchBooksThunk = (e) => {
        e.preventDefault();
        searchBooks(searchingField, subject, sortingMethod, startIndex);
    }

    return (
        <div>
            <form onSubmit={searchBooksThunk}>
                <input onChange={addNewText} type="text" value={searchingField}/>
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
            {isFetching ? <Preloader/> : null}
        </div>
    )
}

export default SearchingArea;