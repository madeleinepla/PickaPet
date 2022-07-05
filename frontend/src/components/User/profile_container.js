import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import Profile from './profile';

const mSTP = (state, ownProps) => {
  // debugger
  return {
    users: state.entities.users,
    user: state.entities.users[ownProps.match.params.userId],
    currentUser: state.session.user,
  }
};

const mDTP = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
  }
};

export default connect(mSTP, mDTP)(Profile);