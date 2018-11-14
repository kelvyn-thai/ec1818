import {takeEvery, put} from 'redux-saga/effects';
import {
   REQUEST_REMOVE_TODO,
   REQUEST_CHANGE_STATUS_TODO
} from "../constant";
import {apiChangeStatusTodo, apiRemoveTodo  } from "../api";
import { 
    changeStatus, changeStatusTodoCompleted, changeStatusTodoFail ,
    remove, removeTodoCompleted, removeTodoFail

} from "./actions";

function* changeStatusTodo(action) {
    try {
        yield put(changeStatus());

        const result = yield apiChangeStatusTodo(action.payload);
        
        const { error, msg, payload } = result.data;
      
        if(error) {
            alert(msg);
            yield put(changeStatusTodoFail());
        }
        else {
            yield put(changeStatusTodoCompleted(payload))
        }
    } catch (error) {
        yield put(changeStatusTodoFail());
    }
}

function* watchChangeStatusTodo() {
    yield takeEvery(REQUEST_CHANGE_STATUS_TODO, changeStatusTodo)
}

function* removeTodo(action) {
    try {
        yield put(remove());

        const result = yield apiRemoveTodo(action.payload);

        const { error , msg, payload } = result.data;

        if(error) {
            alert(msg);
            yield put(removeTodoFail())
        }
        else {
            yield put(removeTodoCompleted(payload))
        }
    } catch (error) {
        yield put(removeTodoFail());
    }
}


function* watchRemoveTodo() {
    yield takeEvery(REQUEST_REMOVE_TODO, removeTodo);
}

export default [
    watchChangeStatusTodo,
    watchRemoveTodo
]