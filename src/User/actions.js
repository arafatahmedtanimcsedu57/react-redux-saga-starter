import { createActions } from 'redux-actions';

const types = {
  USERS_FETCH: 'users/FETCH_REQUEST',
  USERS_RECEIVED: 'users/FETCH_SUCCESS',
  USERS_FETCH_FAIL: 'users/FETCH_FAIL',
};

const creators = createActions({
  [types.USERS_FETCH]: () => ({}),
  [types.USERS_RECEIVED]: (users) => ({ users }),
  [types.USERS_FETCH_FAIL]: (error) => ({ error }),
});

const actions = {
  fetchUsers: creators.users.fetchRequest,
  receivedUsers: creators.users.fetchSuccess,
};

export default actions;

export { types };
