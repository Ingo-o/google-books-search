import {getBooksAJAX} from "../api";

// ACTION CREATORS:
const UPDATE_SEARCHING_FIELD_TEXT = 'UPDATE_SEARCHING_FIELD_TEXT';
export const updateSearchingFieldText = (newText) => ({type: UPDATE_SEARCHING_FIELD_TEXT, newText});

const UPDATE_SORTING_METHOD = 'UPDATE_SORTING_METHOD';
export const updateSortingMethod = (newSortingMethod) => ({type: UPDATE_SORTING_METHOD, newSortingMethod});

const UPDATE_SUBJECT = 'UPDATE_SUBJECT';
export const updateSubject = (newSubject) => ({type: UPDATE_SUBJECT, newSubject});

const ADD_FOUND_BOOKS = 'ADD_FOUND_BOOKS';
export const addFoundBooks = (foundBooks) => ({type: ADD_FOUND_BOOKS, foundBooks});

const SET_TOTAL_ITEMS = 'SET_TOTAL_ITEMS';
export const setTotalItems = (totalItems) => ({type: SET_TOTAL_ITEMS, totalItems});

const LOAD_MORE = 'LOAD_MORE';
export const loadMore = (newBooks, currentIndex) => ({type: LOAD_MORE, newBooks, currentIndex});

const RESET_BOOKS_AND_INDEX = 'RESET_BOOKS_AND_INDEX';
export const resetBooksAndIndex = () => ({type: RESET_BOOKS_AND_INDEX});

const FETCHING_TOGGLE = 'FETCHING_TOGGLE';
export const fetchingToggle = (isFetching) => ({type: FETCHING_TOGGLE, isFetching});

// THUNKS:
export const searchBooks = (searchingField, subject, sortingMethod, startIndex) => {
    return (dispatch) => {
        dispatch(resetBooksAndIndex());
        dispatch(fetchingToggle(true));
        getBooksAJAX(searchingField, subject, sortingMethod, startIndex)
            .then(response => {
                if (response === 'STOP') {
                    alert('Sorry, there are no books on your request.');
                    dispatch(fetchingToggle(false));
                    return;
                }
                dispatch(fetchingToggle(false));
                dispatch(addFoundBooks(response.items));
                dispatch(setTotalItems(response.totalItems));
            })
    }
};

export const loadMoreBooks = (searchingField, subject, sortingMethod, startIndex) => {
    return (dispatch) => {
        dispatch(fetchingToggle(true));
        getBooksAJAX(searchingField, subject, sortingMethod, startIndex)
            .then(response => {
                if (response === 'STOP') {
                    alert('Sorry, there are no more books on your request.');
                    dispatch(fetchingToggle(false));
                    return;
                }
                dispatch(fetchingToggle(false));
                dispatch(loadMore(response.items, startIndex));
            })
    }
}

const initialState = {
    books: [], searchingField: '', sortingMethod: 'relevance', subject: 'all',
    totalItems: null, startIndex: 0, isFetching: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SEARCHING_FIELD_TEXT:
            return {
                ...state,
                searchingField: action.newText,
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
                startIndex: action.currentIndex + 30,
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

export default reducer;