import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import NavBar from './navbar';

const mSTP = state => {
  // debugger
  return {
    loggedIn: state.session.isAuthenticated,
    currentUser: state.session.user
  }
};

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal))
  }
};

export default connect(mSTP, mDTP)(NavBar);