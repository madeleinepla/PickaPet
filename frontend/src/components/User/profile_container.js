import { connect } from 'react-redux';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import Profile from './profile';

const mSTP = (state, ownProps) => {
  // debugger
  return {
    users: state.entities.users,
    currentUser: state.session.user,
    ownProps
  }
};

const mDTP = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchUsers: () => dispatch(fetchUsers())
  }
};

export default connect(mSTP, mDTP)(Profile);