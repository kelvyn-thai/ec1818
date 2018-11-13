import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducer";
import rootSagas from "../reducer/rootSagas";

const saga = createSagaMiddleware();

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(
            thunk,
            saga
        )    
    )
)

saga.run(rootSagas);

export default store;