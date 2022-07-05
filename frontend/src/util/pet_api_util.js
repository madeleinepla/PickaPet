import axios from 'axios'

export const getPets = () => {
    return axios.get('/api/pets')
}

export const getPet = (petId) => {
    return axios.get(`/api/pets/${petId}`)
}