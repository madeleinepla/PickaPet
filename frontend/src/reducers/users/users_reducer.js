import { RECEIVE_USERS, RECEIVE_USER, RECEIVE_USERS_SEARCH } from '../../actions/user_actions';

const UsersReducer = (state = { all: {}, user: {}, userssearch: {} }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_USER:
      newState.user = action.user.data;
      return newState;
    case RECEIVE_USERS:
      newState.all = action.users.data;
      return newState;
    case RECEIVE_USERS_SEARCH:
      newState.userssearch = action.users.data.user
      return newState;
    default:
      return state;
  }
}

export default UsersReducer;