import { createActions } from 'redux-actions';

const types = {
    REPOS_FETCH: 'github/repos/FETCH_REQUEST',
    REPOS_RECEIVED: 'github/repos/FETCH_SUCCESS',
    REPOS_FETCH_FAIL: 'github/repos/FETCH_FAIL'
};

const creators = createActions({
    [types.REPOS_FETCH]: () => ({}),
    [types.REPOS_RECEIVED]: repos => ({ repos }),
    [types.REPOS_FETCH_FAIL]: error => ({ error })
});

const actions = {
    fetchRepos: creators.github.repos.fetchRequest,
    receivedRepos: creators.github.repos.fetchSuccess
};

export default actions;

export { types };
