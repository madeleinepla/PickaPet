import axios from 'axios';

export const getUsers = () => {
  return axios.get('/api/users');
};

export const getUser = (userId) => {
  // debugger
  return axios.get(`/api/users/${userId}`);
};

export const patchUser = (user) => {
  return axios.patch(`/api/users/${user.id}`, user)
}


export const IncomingAddfriend= (currentUser, friendId) => {
  return axios.patch(`/api/users/${friendId}/incomingaddfriend`, {currentUser:currentUser.id})
}
export const OutgoingAddfriend= (currentUser, friendId) => {
  return axios.patch(`/api/users/${friendId}/outgoingaddfriend`, {currentUser:currentUser.id})
}


export const acceptfriendrequest1 = (currentUser, requesterId) => {
  return axios.patch(`/api/users/${currentUser.id}/acceptfriendrequest1/`, {friendId:requesterId})
}
export const acceptfriendrequest2 = (currentUser, requesterId) => {
  return axios.patch(`/api/users/${currentUser.id}/acceptfriendrequest2/`, {friendId:requesterId})
}
export const acceptfriendrequest3 = (currentUser, requesterId) => {
  return axios.patch(`/api/users/${currentUser.id}/acceptfriendrequest3/`, {friendId:requesterId})
}
export const acceptfriendrequest4 = (currentUser, requesterId) => {
  return axios.patch(`/api/users/${currentUser.id}/acceptfriendrequest4/`, {friendId:requesterId})
}


export const unfriend1 = (currentUser, friendId) => {
  return axios.patch(`/api/users/${friendId}/unfriend1`, {currentUser:currentUser})
}
export const unfriend2 = (currentUser, friendId) => {
  return axios.patch(`/api/users/${friendId}/unfriend2`, {currentUser:currentUser})
}

export const addPetToUser = (user, petId) => {
  // debugger;
  return axios.patch(`/api/users/${ user.id }/addpet`, {petId: petId})
}