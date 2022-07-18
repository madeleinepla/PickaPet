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

export const addPetToUser = (user, petId) => {
  // debugger;
  return axios.patch(`/api/users/${ user.id }/addpet`, {petId: petId})
}

export const searchUsers = (query) => {
  // debugger
  return axios.get(`/api/users/search-users/${query}`)
}