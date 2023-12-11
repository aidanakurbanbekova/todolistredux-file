import {composeWithDevTools} from "redux-devtools-extension";
import {combineReducers, createStore} from "redux";
import todoReducer from "./todo/reducer";
import {todoFilterReducer} from "./filter/reducer"

const rootReducer = combineReducers({
    todos: todoReducer,
    activeTodoFilter: todoFilterReducer,
})
export const store = createStore(rootReducer, composeWithDevTools())