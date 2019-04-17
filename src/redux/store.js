import {createStore, applyMiddleware, compose} from "redux";
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware} from 'react-router-redux';
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducer/root";
import rootSagas from "./saga/root";

let middlewares = [];

//Saga middleware
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

//react-router middleware
const history = createHistory();
const reactRouterMiddleware = routerMiddleware(history);
middlewares.push(reactRouterMiddleware);


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSagas);

export {store, history};
