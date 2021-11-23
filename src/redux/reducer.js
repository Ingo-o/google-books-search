// Reducer принимает на вход state и action и возвращает измененный (на основании action) state.
// Action это объект содержащий информацию о том что мы хотим изменить.

// ACTION CREATORS:
const UPDATE_SEARCH_FIELD_TEXT = 'UPDATE_SEARCH_FIELD_TEXT';
export const updateSearchFieldText = (newText) => ({type: UPDATE_SEARCH_FIELD_TEXT, newText});

const UPDATE_SORTING_METHOD = 'UPDATE_SORTING_METHOD';
export const updateSortingMethod = (newSortingMethod) => ({type: UPDATE_SORTING_METHOD, newSortingMethod});

const ADD_FOUND_BOOKS = 'ADD_FOUND_BOOKS';
export const addFoundBooks = (foundBooks) => ({type: ADD_FOUND_BOOKS, foundBooks});

/*const SORT_BOOKS = 'SORT_BOOKS';
export const sortBooks = () => ({type: SORT_BOOKS});*/

const initialState = {
    books: [],
    searchField: '',
    sortingMethod: '',
};

const appReducer = (state = initialState, action) => {
    // В виду специфики работы react-redux, из редьюсера нужно возвращать не измененный state,
    // а его копию с новыми изменениями. Глубоко копируем только то что собираемся менять.
    switch (action.type) {
        case UPDATE_SEARCH_FIELD_TEXT:
            return {
                ...state,
                searchField: action.newText,
            };
        case UPDATE_SORTING_METHOD:
            return {
                ...state,
                sortingMethod: action.newSortingMethod,
            };
        case ADD_FOUND_BOOKS:
            return {
                ...state,
                books: action.foundBooks,
            };
        default:
            return state;
    }
};

export default appReducer;