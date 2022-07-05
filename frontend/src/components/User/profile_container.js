import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import Profile from './profile';

const mSTP = (state, ownProps) => {
  return {
    users: state.entities.users,
    currentUser: state.session.user,
  }
};

const mDTP = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
  }
};

export default connect(mSTP, mDTP)(Profile);