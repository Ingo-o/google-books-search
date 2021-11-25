import './App.css';
import SearchAreaContainer from "./components/SearchArea/SearchAreaContainer";
import BookListContainer from "./components/BookList/BookListContainer";
import {Route} from "react-router-dom";
import BookInfoContainer from "./components/BookInfo/BookInfoContainer";

const App = () => {
    return (
        <div className='app-wrapper'>
            <SearchAreaContainer/>
            <div>
                <Route path="/info/:bookId" render={() => <BookInfoContainer/>}/>
            </div>
            <BookListContainer/>
        </div>
    );
}

export default App;
