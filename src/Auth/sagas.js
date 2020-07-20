import { all, takeLatest } from 'redux-saga/effects';

import { types } from './actions';
import { loginSubmit } from './queries';

function* saga() {
    yield all([takeLatest(types.LOGIN_SUBMIT, loginSubmit)]);
}

export default saga;