import {getBooksAJAX} from "../../api";

const SearchArea = (props) => {
    const {searchField} = props.state;
    const {updateSearchFieldText, updateSortingMethod, addFoundBooks} = props;

    const addNewText = (e) => updateSearchFieldText(e.target.value);

    const choseSortingMethod = (e) => {
        updateSortingMethod(e.target.value);
    }

    const searchBooks = (e) => {
        e.preventDefault();
        getBooksAJAX(searchField)
            .then(items => {
                addFoundBooks(items);
            })
    }

    return (
        <div className="search-area">
            <form onSubmit={searchBooks}>
                <input onChange={addNewText} type="text" value={searchField}/>
                <button type="submit">Search</button>
                <select defaultValue="Sort" onChange={choseSortingMethod}>
                    <option disabled value="Sort">Sort</option>
                    <option value="Newest">Newest</option>
                    <option value="Oldest">Oldest</option>
                </select>
            </form>
        </div>
    )
}

export default SearchArea;