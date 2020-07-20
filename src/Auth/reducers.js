import { handleActions } from 'redux-actions'

import actions, { types } from './actions';

const initState = {
    authError: null,
    authToken: null,
    loading: false
}

const reducers = handleActions(
    {
        [types.LOGIN_SUBMIT]: (state, action) => ({
            ...state,
            authToken: null,
            authError: null,
            loading: true
        }),
        [types.LOGIN_SUCCESS]: (state, action) => ({
            ...state,
            authToken: action.payload.token,
            authError: null,
            loading: false
        }),
        [types.LOGIN_FAILD]: (state, action) => ({
            ...state,
            authError: 'LOGIN FAILD',
            authError: null,
            loading: false
        })
    },
    initState
);


export default reducers; 