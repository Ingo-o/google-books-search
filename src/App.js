import './App.css';
import SearchingAreaContainer from "./components/SearchingArea/SearchingAreaContainer";
import ContentContainer from "./components/Content/ContentContainer";

const App = () => {
    return (
        <div className="app-wrapper">
            <SearchingAreaContainer/>
            <ContentContainer/>
        </div>
    );
}

export default App;
