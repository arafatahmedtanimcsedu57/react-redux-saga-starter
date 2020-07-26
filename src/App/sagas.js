import { all } from 'redux-saga/effects';

import { default as repos } from '../Github/sagas';
import { default as loginSubmit } from '../Auth/sagas';
import { default as users } from '../User/sagas';
function* rootSaga() {
  yield all([repos(), loginSubmit(), users()]);
}

export default rootSaga;
