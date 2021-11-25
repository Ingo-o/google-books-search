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
};

// Возвращает объект с данными из state которые будут переданы в презентационную компоненту в качестве пропсов.
const mapStateToProps = (state) => ({
    searchField: state.appState.searchField,
    subject: state.appState.subject,
    sortingMethod: state.appState.sortingMethod,
    startIndex: state.appState.startIndex,
    isFetching: state.appState.isFetching,
});

// Объединение разных обработчиков функцией compose.
export default SearchAreaContainer = connect(mapStateToProps, {
    updateSearchFieldText,
    updateSortingMethod,
    addFoundBooks,
    updateSubject,
    setTotalItems,
    resetBooksAndIndex,
    fetchingToggle,
})(SearchArea);

/*
2. withRouter - HOC-обертка передающая в компоненту данные из URL.
3. Connect создаёт контейнерную компоненту вокруг другой компоненты и в виде пропсов передают в неё данные из объектов
которые возвращаются двумя функциями. Когда происходят изменения, connect сам перерисовывает дерево.
Вместо функции mapDispatchToProps вторым параметром мы передаем объект. Connect сам приведет его к виду:
follow: (userId) => dispatch(followActionCreator(userId)).
Как и в случае с mapStateToProps, коллбеки будут переданы в презентационную компоненту в качестве пропсов.
*/