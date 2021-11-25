import {combineReducers} from "redux";
import appReducer from "./reducer";

const {createStore} = require("redux");

// Преобразуем объект с данными и редьюсерами в одну функцию.
let reducers = combineReducers({appState: appReducer});

// При помощи вышесозданной функции создаём store.
let store = createStore(reducers);

window.store = store;
export default store;