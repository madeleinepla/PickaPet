import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state) => {
  return {
    errors: state.errors.session,
    isAuthenticated: state.session.isAuthenticated
  };
};

const mDTP = dispatch => {
  return {
    login: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(LoginForm);