import { put, takeLatest, call, all } from 'redux-saga/effects'
import * as api from '../api/test'

function* testSaga(action) {
    console.log('saga is ready')
    let res = yield call(api.test);
    yield put({type: 'TEST.testReducer', payload: res.data.data})
}


export default function* () {
    yield all(
        [
            takeLatest('TEST.testSaga', testSaga)
        ]
    )
}