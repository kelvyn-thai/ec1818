import { take, put, call, fork, cancel, cancelled } from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_FAIL, LOGOUT } from '../constant';
import { loginSuccess, loginFail } from "./actions";


const delay = (ms) => new Promise(res => setTimeout(res, ms))


function fakeApiAuthorize(username, password) {

    return new Promise((resolve, reject) => {
        //fake api from server....
        setTimeout(() => {
            const err = false;
            const res = '23132cxdsfsdfas922##@#@!$!@%';
            err ? reject(err) : resolve(res);
        }, 2000);
    })
}


function* authorize(username, password) {
    try {
        console.log('call api to authorize in 2s.....')
        const token = yield call(fakeApiAuthorize, username, password);

        yield put(loginSuccess());

        console.log('author success! start store token in 1s....')
        yield delay(1000);

        sessionStorage.setItem('access_token', token);

        return token;

    } catch (error) {
        yield put(loginFail());
    } 
    if (yield cancelled()){
        alert('User logout! Do not need load data more...')
    }
}


function* watchLogin() {
    while (true) {

        const { username, password } = yield take(LOGIN_REQUEST);

        const task = yield fork(authorize, username, password)

        const action =  yield take(LOGOUT);

        if(action.type == 'LOGOUT'){
            console.log('cancel event req authorize...')
            yield cancel(task);
        }
        sessionStorage.removeItem('access_token');

    }
}

export default [
    watchLogin
]