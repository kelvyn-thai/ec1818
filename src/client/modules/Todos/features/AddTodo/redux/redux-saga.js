import { takeEvery, put } from 'redux-saga/effects'
import { ADD_TODO_REQUEST } from '../constant';
import { addTodoFail, addTodoCompleted } from "../redux/actions";
import { apiAddTodo } from "../api";

function* addToDo(action) {

    try {

        const data = {
            title: action.payload,
        }

        const result = yield apiAddTodo(data);

        const { error, msg, payload } = result.data;

        if (error) {
            alert(msg);
            yield put(addTodoFail())
        }
        else {
            yield put(addTodoCompleted(payload))
        }

    } catch (error) {
        yield put(addTodoFail())
    }
}


function* watchAddTodo() {

    yield takeEvery(ADD_TODO_REQUEST, addToDo);

}

export default [
    watchAddTodo
]