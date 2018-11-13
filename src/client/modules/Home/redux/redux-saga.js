import { select, takeEvery, take } from 'redux-saga/effects';


function* watchAndLog() {
    // yield takeEvery('*', logAction);
    while (true) {
        const action = yield take('*');
        const state = yield select();
    }
}

function* logAction(action) { 

    const state = yield select();

}

export default [
    watchAndLog
]