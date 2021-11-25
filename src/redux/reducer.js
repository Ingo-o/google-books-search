// Reducer принимает на вход state и action и возвращает измененный (на основании action) state.
// Action это объект содержащий информацию о том что мы хотим изменить.

// ACTION CREATORS:
const UPDATE_SEARCH_FIELD_TEXT = 'UPDATE_SEARCH_FIELD_TEXT';
export const updateSearchFieldText = (newText) => ({type: UPDATE_SEARCH_FIELD_TEXT, newText});

const UPDATE_SORTING_METHOD = 'UPDATE_SORTING_METHOD';
export const updateSortingMethod = (newSortingMethod) => ({type: UPDATE_SORTING_METHOD, newSortingMethod});

const ADD_FOUND_BOOKS = 'ADD_FOUND_BOOKS';
export const addFoundBooks = (foundBooks) => ({type: ADD_FOUND_BOOKS, foundBooks});

const UPDATE_SUBJECT = 'UPDATE_SUBJECT';
export const updateSubject = (newSubject) => ({type: UPDATE_SUBJECT, newSubject});

const SET_TOTAL_ITEMS = 'SET_TOTAL_ITEMS';
export const setTotalItems = (totalItems) => ({type: SET_TOTAL_ITEMS, totalItems});

const LOAD_MORE = 'LOAD_MORE';
export const loadMore = (newBooks, currentIndex) => ({type: LOAD_MORE, newBooks, currentIndex});

const RESET_BOOKS_AND_INDEX = 'RESET_BOOKS_AND_INDEX';
export const resetBooksAndIndex = () => ({type: RESET_BOOKS_AND_INDEX});

const FETCHING_TOGGLE = 'FETCHING_TOGGLE';
export const fetchingToggle = (isFetching) => ({type: FETCHING_TOGGLE, isFetching});

const initialState = {
    books: [],
    searchField: '',
    sortingMethod: 'relevance',
    subject: 'all',
    totalItems: null,
    startIndex: 0,
    isFetching: false,
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
        case UPDATE_SUBJECT:
            return {
                ...state,
                subject: action.newSubject,
            };
        case ADD_FOUND_BOOKS:
            return {
                ...state,
                books: action.foundBooks,
            };
        case SET_TOTAL_ITEMS:
            return {
                ...state,
                totalItems: action.totalItems,
            };
        case LOAD_MORE:
            return {
                ...state,
                startIndex: action.currentIndex + 2,
                books: [...state.books, ...action.newBooks],
            };
        case RESET_BOOKS_AND_INDEX:
            return {
                ...state,
                startIndex: 0,
                books: [],
            };
        case FETCHING_TOGGLE:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        default:
            return state;
    }
};

export default appReducer;