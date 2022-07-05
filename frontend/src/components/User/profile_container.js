import { connect } from 'react-redux';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import Profile from './profile';

const mSTP = (state, ownProps) => {
  const users = Object.values(state.entities.users.all);
  debugger
  return {
    users: users,
    currentUser: state.entities.users.user,
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