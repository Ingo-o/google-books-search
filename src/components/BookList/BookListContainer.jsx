import React from "react";
import {connect} from "react-redux";
import BookList from "./BookList";

class BookListContainer extends React.Component {
    render() {
        const {state} = this.props;
        return (
            <BookList state={state}/>
        );
    }
};

// Возвращает объект с данными из state которые будут переданы в презентационную компоненту в качестве пропсов.
const mapStateToProps = (state) => ({books: state.appState.books});

// Объединение разных обработчиков функцией compose.
export default BookListContainer = connect(mapStateToProps, {})(BookList);

/*
2. withRouter - HOC-обертка передающая в компоненту данные из URL.
3. Connect создаёт контейнерную компоненту вокруг другой компоненты и в виде пропсов передают в неё данные из объектов
которые возвращаются двумя функциями. Когда происходят изменения, connect сам перерисовывает дерево.
Вместо функции mapDispatchToProps вторым параметром мы передаем объект. Connect сам приведет его к виду:
follow: (userId) => dispatch(followActionCreator(userId)).
Как и в случае с mapStateToProps, коллбеки будут переданы в презентационную компоненту в качестве пропсов.
*/