import { all } from 'redux-saga/effects';
import homeSaga from "../modules/Home/redux/redux-saga";

function* rootSagas() {
    yield all([
        homeSaga
    ])
}

export default rootSagas;