import { takeEvery, put} from 'redux-saga/effects';
import { FETCH_TODOS_REQUEST, FETCH_TODOS, FETCHED_DATA, FETCH_TODOS_FAIL, FETCH_TODOS_COMPLETED } from '../constant';
import { apiFetchTodos } from "../api";


function* requestFetchTodos(payload) {
    try {
        
        yield put(FETCH_TODOS);

        const result = yield apiFetchTodos(payload);

        const { data } =  result;

        if(data) {
            yield put(FETCH_TODOS_COMPLETED, data);
        }
        else{ 
            yield put(FETCH_TODOS_FAIL)
        }

    } catch (error) {
        yield put(FETCH_TODOS_FAIL);
    }
}

function* watchRequestFetchTodos() {
    yield takeEvery(FETCH_TODOS_REQUEST, requestFetchTodos);
}

export default [
    watchRequestFetchTodos()
]