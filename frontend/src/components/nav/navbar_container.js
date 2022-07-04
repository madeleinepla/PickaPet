import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import NavBar from './navbar';

const mSTP = state => {
  return {
    loggedIn: state.session.isAuthenticated
  }
};

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal))
  }
};

export default connect(mSTP, mDTP)(NavBar);