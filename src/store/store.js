import {  combineReducers, createStore } from "redux";
import { taskReducer } from "../reducers/taksReducers";
import { getLocalStorage, saveLocalStorage } from "../utils/LocalStorage";

const storageState = getLocalStorage()

const reducers = combineReducers({
    tasks: taskReducer
})

export const store = createStore(
    reducers,
    storageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
    saveLocalStorage({
        tasks: store.getState().tasks
    })
})