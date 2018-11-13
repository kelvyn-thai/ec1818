import {take, put} from 'redux-saga/effects'
import { ADD_TODO_REQUEST } from '../constant';

function* addToDo(action) {




}


function* watchAddTodo() {

    for(let i = 0; i < 3; i++) {
        const action = yield take(ADD_TODO_REQUEST);
    }

    alert('Year!')
}

export default [
    watchAddTodo
]