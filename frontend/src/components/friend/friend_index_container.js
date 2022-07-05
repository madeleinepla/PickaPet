import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import FriendIndex from './friend_index';

const mSTP = (state, ownProps) => {
  // debugger
  const currentUser = state.session.user
  const friends = Object.values(state.entities.users).filter((user) => {
    user.friends.map(friend => friend.id).includes(currentUser.id)
  })

  return {
    friends: friends,
    currentUser: currentUser,
  }
};

const mDTP = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  }
};

export default connect(mSTP, mDTP)(FriendIndex);