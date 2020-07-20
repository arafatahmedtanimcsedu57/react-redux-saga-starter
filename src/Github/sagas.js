import { all, takeLatest } from 'redux-saga/effects';

import { types } from './actions';
import { fetchRepos } from './queries';

function* saga() {
    yield all([takeLatest(types.REPOS_FETCH, fetchRepos)]);
}

export default saga;