import axios from 'axios';
import { getUsers, getUser, patchUser, IncomingAddfriend, OutgoingAddfriend, acceptfriendrequest1, acceptfriendrequest2, acceptfriendrequest3, acceptfriendrequest4, unfriend1, unfriend2} from '../util/user_api_util';

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users
  }
};

export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  }
};

export const fetchUsers = () => dispatch => (
  getUsers()
    .then(users => dispatch(receiveUsers(users)))
);

export const fetchUser = (userId) => dispatch => (
  getUser(userId)
    .then(user => dispatch(receiveUser(user)))
);

export const updateUser = (user) => dispatch => (
  patchUser(user)
    .then(user => dispatch(receiveUser(user)))
);

export const incomingaddfriend = (currentUser, friendId) =>dispatch => (
  IncomingAddfriend(currentUser, friendId)
  .then(friend=> dispatch(receiveUser(friend)))
)
export const outgoingaddfriend = (currentUser, friendId) =>dispatch => (
  OutgoingAddfriend(currentUser, friendId)
  .then(currentUser=> dispatch(receiveUser(currentUser)))
)

export const Acceptfriendrequest1 = (currentUser, requesterId) =>dispatch => (
  acceptfriendrequest1(currentUser, requesterId)
  .then(currentUser=> dispatch(receiveUser(currentUser)))
)
export const Acceptfriendrequest2 = (currentUser, requesterId) =>dispatch => (
  acceptfriendrequest2(currentUser, requesterId)
  .then(currentUser=> dispatch(receiveUser(currentUser)))
)
export const Acceptfriendrequest3 = (currentUser, requesterId) =>dispatch => (
  acceptfriendrequest3(currentUser, requesterId)
  .then(requester=> dispatch(receiveUser(requester)))
)
export const Acceptfriendrequest4 = (currentUser, requesterId) =>dispatch => (
  acceptfriendrequest4(currentUser, requesterId)
  .then(requester=> dispatch(receiveUser(requester)))
)

export const Unfriend1 = (currentUser, friendId) => dispatch => (
unfriend1(currentUser, friendId)
.then(user=>dispatch(receiveUser(user)))
)
export const Unfriend2 = (currentUser, friendId) => dispatch => (
  unfriend2(currentUser, friendId)
  .then(user=>dispatch(receiveUser(user)))
  )