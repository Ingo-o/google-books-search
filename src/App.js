import './App.css';
import SearchAreaContainer from "./components/SearchArea/SearchAreaContainer";
import BookListContainer from "./components/BookList/BookListContainer";

const App = () => {
    return (
        <div className='app-wrapper'>
            <SearchAreaContainer/>
            <BookListContainer/>
        </div>
    );
}

export default App;
