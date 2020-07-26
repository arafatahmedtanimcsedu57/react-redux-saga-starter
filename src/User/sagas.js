import { all, takeLatest } from 'redux-saga/effects';

import { types } from './actions';
import { fetchUsers } from './queries';

function* saga() {
  yield all([takeLatest(types.USERS_FETCH, fetchUsers)]);
}

export default saga;
