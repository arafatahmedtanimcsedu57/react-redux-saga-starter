import { all } from 'redux-saga/effects';

import { default as repos } from '../Github/sagas'
import { default as loginSubmit } from '../Auth/sagas';

function* rootSaga() {
  yield all([
    repos(),
    loginSubmit()
  ]);
}

export default rootSaga;
