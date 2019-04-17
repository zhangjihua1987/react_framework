import { fork } from 'redux-saga/effects'
import testSaga from './testSaga'

function startSagas(...sagas) {
    return function* () {
        yield* sagas.map(saga => fork(saga))
    }
}

export default  startSagas(
    testSaga
);