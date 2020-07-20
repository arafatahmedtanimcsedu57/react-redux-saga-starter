import { call, put } from 'redux-saga/effects';
import axios from 'axios'

import actions from './actions';

function* fetchRepos() {
    const apiCall = () => {
        return axios
            .get(`https://api.github.com/search/repositories?q=topic:react`).then(response => response.data)
            .catch(err => {
                throw err;
            });
    }

    try {
        const repos = yield call(apiCall);
        yield put(actions.receivedRepos(repos.items))
    } catch (error) {
        console.log(error);
    }
}

export { fetchRepos };