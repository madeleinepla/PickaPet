import { connect } from 'react-redux';
import { fetchUser, fetchUsers, incomingaddfriend, outgoingaddfriend, Acceptfriendrequest1, Acceptfriendrequest2, Acceptfriendrequest3, Acceptfriendrequest4, Unfriend1, Unfriend2 } from '../../actions/user_actions';
import { requestPets } from '../../actions/pet_actions';
import Profile from './profile';

const mSTP = (state, ownProps) => {
  // debugger
  const users = Object.values(state.entities.users.all);
  const pets = Object.values(state.entities.pets.all);
  return {
    users: users,
    user: state.entities.users.user,
    pets: pets,
    currentUser: state.session.user,
    ownProps
  }
};

const mDTP = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchUsers: () => dispatch(fetchUsers()),
    requestPets: () => dispatch(requestPets()),
    incomingaddfriend: (currentUser,friendId)=>dispatch(incomingaddfriend(currentUser, friendId)),
    outgoingaddfriend: (currentUser,friendId)=>dispatch(outgoingaddfriend(currentUser, friendId)),
    Acceptfriendrequest1: (currentUser, requesterId)=>dispatch(Acceptfriendrequest1(currentUser, requesterId)),
    Acceptfriendrequest2: (currentUser, requesterId)=>dispatch(Acceptfriendrequest2(currentUser, requesterId)),
    Acceptfriendrequest3: (currentUser, requesterId)=>dispatch(Acceptfriendrequest3(currentUser, requesterId)),
    Acceptfriendrequest4: (currentUser, requesterId)=>dispatch(Acceptfriendrequest4(currentUser, requesterId)),
    Unfriend1: (currentUser, friendId)=>dispatch(Unfriend1(currentUser, friendId)),
    Unfriend2: (currentUser, friendId)=>dispatch(Unfriend2(currentUser, friendId))

  }
};

export default connect(mSTP, mDTP)(Profile);