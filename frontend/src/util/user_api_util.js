import axios from 'axios';

export const getUsers = () => {
  return axios.get('/api/users');
};
export const getSearchUsers = (query) => {
  // debugger
  return axios.get('/api/users/search-users', {query:query});
};

export const getUser = (userId) => {
  return axios.get(`/api/users/${userId}`);
};