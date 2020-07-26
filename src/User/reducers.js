import { handleActions } from 'redux-actions';

import { types } from './actions';

const initialState = { users: [], loading: false };

const reducers = handleActions(
  {
    [types.USERS_FETCH]: (state, action) => ({
      ...state,
      users: [],
      loading: true,
    }),

    [types.USERS_RECEIVED]: (state, action) => ({
      ...state,
      users: action.payload.users,
      loading: false,
    }),

    [types.USERS_FETCH_FAIL]: (state, action) => ({
      ...state,
      users: [],
      loading: false,
    }),
  },
  initialState
);

export default reducers;
