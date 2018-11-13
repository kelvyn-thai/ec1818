import { all, fork } from 'redux-saga/effects';


const requireModule = require.context("../modules", true, /redux-saga.js/); //extract redux-saga.ts files inside redux folder
let sagas = [];
requireModule.keys().forEach((fileName) => {
    sagas=[...sagas,...requireModule(fileName).default];
});
const globalSaga = sagas.map(saga=>fork(saga))

export default function* rootSaga() {
    yield all([
        ...globalSaga
    ])
}