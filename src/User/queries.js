import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import actions from './actions';

function* fetchUsers() {
  const apiCall = () => {
    return axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  };

  try {
    const users = yield call(apiCall);
    yield put(actions.receivedUsers(users));
  } catch (error) {
    console.log(error);
  }
}

export { fetchUsers };
