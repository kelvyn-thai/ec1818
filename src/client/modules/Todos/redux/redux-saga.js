import { takeEvery, put} from 'redux-saga/effects';
import { FETCH_TODOS_REQUEST} from '../constant';
import { apiFetchTodos } from "../api";
import { fetchTodos, fetchTodosCompleted, fetchTodosFail } from "./actions";

function* requestFetchTodos(action) {
    try {
        yield put(fetchTodos());

        const result = yield apiFetchTodos(action.payload);
    
        const { data } =  result;

        if(data) {
            yield put(fetchTodosCompleted(data));
        }
        else{ 
            yield put(fetchTodosFail())
        }

    } catch (error) {
        yield put(fetchTodosFail());
    }
}

function* watchRequestFetchTodos() {

    yield takeEvery(FETCH_TODOS_REQUEST, requestFetchTodos);
}

 

export default [
    watchRequestFetchTodos
]