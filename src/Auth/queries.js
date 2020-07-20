
import { put, call } from 'redux-saga/effects';
import axios from 'axios';

import actions from './actions';

function* loginSubmit({ payload }) {
    const apiCall = () => {
        return axios
            .post(`https://dev-dexter.retaildata.xyz/api/auth/token`, {
                username: payload.username,
                password: payload.password
            }).then(res => res.data.access)
            .catch(err => {
                throw err;
            });
    }

    try {
        const token = yield call(apiCall);
        yield put(actions.loginSuccess(token))
    } catch (error) {
        console.log(error);
    }
}

export { loginSubmit };
