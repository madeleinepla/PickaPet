import { connect } from 'react-redux';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
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
    requestPets: () => dispatch(requestPets())
  }
};

export default connect(mSTP, mDTP)(Profile);