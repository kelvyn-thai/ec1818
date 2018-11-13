import { select, takeEvery, take } from 'redux-saga/effects';


function* watchAndLog() {
    // yield takeEvery('*', logAction);
    while (true) {
        const action = yield take('*');
        const state = yield select();

        console.log('action ', action);
        console.log('state', state);        
    }
}

function* logAction(action) { 

    const state = yield select();

    console.log('action ', action);
    console.log('state', state);
}

export default [
    watchAndLog()
]