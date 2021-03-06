
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import RootReducers from './RootReducer';

const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
};

const store = createStore(initialState, RootReducers, applyMiddleware(thunk));
export default store;