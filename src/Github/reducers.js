import { handleActions } from 'redux-actions';

import { types } from './actions';

const initialState = { repos: [], loading: false };

const reducers = handleActions(
    {
        [types.REPOS_FETCH]: (state, action) => ({
            ...state,
            repos: [],
            loading: true
        }),

        [types.REPOS_RECEIVED]: (state, action) => ({
            ...state,
            repos: action.payload.repos,
            loading: false
        }),

        [types.REPOS_FETCH_FAIL]: (state, action) => ({
            ...state,
            repos: [],
            loading: false
        })
    },
    initialState
);

export default reducers;
