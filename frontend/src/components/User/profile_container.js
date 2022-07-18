import { connect } from 'react-redux';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import { requestPets } from '../../actions/pet_actions';
import Profile from './profile';

const mSTP = (state, ownProps) => {
  const users = Object.values(state.entities.users.all);
  const user = state.entities.users.user;
  let pets = Object.values(state.entities.pets.all);
  // debugger;
  pets = pets.filter((pet) => {
    if(user.pets){
      return user.pets.includes(pet._id)
    }
  });
  // debugger
  return {
    users,
    user,
    pets,
    currentUser: state.session.user,
    ownProps
  }
};

const mDTP = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchUsers: () => dispatch(fetchUsers()),
    requestPets: () => dispatch(requestPets()),
  }
};

export default connect(mSTP, mDTP)(Profile);