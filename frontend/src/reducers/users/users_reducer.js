import { RECEIVE_USERS, RECEIVE_USER } from '../../actions/user_actions';

const UsersReducer = (state = { all: {}, user: {} }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  // debugger;
  switch (action.type) {
    case RECEIVE_USER:
      newState.user = action.user.data;
      return newState;
    case RECEIVE_USERS:
      newState.all = action.users.data;
      return newState;
    default:
      return state;
  }
}

export default UsersReducer;