import { connect } from 'react-redux';

import SignIn from './components/SignIn';
import actions from './actions';

const mapStateToProps = store => ({
    token: store.auth.authToken,
    error: store.auth.authError
});

const mapDispatchToProps = {
    signIn: actions.loginSubmit
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn);
