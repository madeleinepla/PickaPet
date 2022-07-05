import { RECEIVE_USERS, RECEIVE_USER } from '../../actions/user_actions';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, state, { [action.user.id]: action.user.data });
    case RECEIVE_USERS:
      return action.users.data;
    default:
      return state;
  }
}

export default UsersReducer;