import { createActions } from 'redux-actions'

const types = {
    LOGIN_SUBMIT: 'auth/LOGIN_SUBMIT',
    LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',
    LOGIN_FAILD: 'auth/LOGIN_FAILD',
}

const creators = createActions({
    [types.LOGIN_SUBMIT]: (credentials) => ({ ...credentials }),
    [types.LOGIN_SUCCESS]: (token) => ({ token }),
    [types.LOGIN_FAILD]: (error) => ({ error })
})

const actions = {
    loginSubmit: creators.auth.loginSubmit,
    loginSuccess: creators.auth.loginSuccess,
    loginFaild: creators.auth.loginFaild,
};

export default actions;

export { types };