import './App.css';
import SearchingAreaContainer from "./components/SearchingArea/SearchingAreaContainer";
import BookListContainer from "./components/BookList/BookListContainer";

const App = () => {
    return (
        <div>
            <SearchingAreaContainer/>
            <BookListContainer/>
        </div>
    );
}

export default App;
