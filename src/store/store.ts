import {combineReducers} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useSelector as useReduxSelector} from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
// Importamos applyMiddleware de Redux, para poder agregar Thunk o Saga como Middleware
import { createStore, compose,applyMiddleware } from 'redux';
import thunk from "redux-thunk";
/*
import thunk from 'redux-thunk';
import reducer from '../reducers/reducer';
*/

const rootReducer = combineReducers({
   
});

export type IRootState = ReturnType<typeof rootReducer>;
// Tipamos el hook useSelector
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector


export const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk)) // Aqui aplicaremos los middlewares
)