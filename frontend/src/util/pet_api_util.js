import axios from 'axios'

export const getPets = () => {
    return axios.get('/api/pets')
}

export const getPet = (petId) => {
    return axios.get(`/api/pets/${petId}`)
}

export const patchPet = (pet) => {
    return axios.patch(`/api/pets/${pet._id}`, pet)
}