import { getPets, getPet } from "../util/pet_api_util";

export const RECEIVE_PETS = "RECEIVE_PETS";
export const RECEIVE_PET = "RECEIVE_PET";

//action creator
export const receivePets = pets => ({
    type: RECEIVE_PETS,
    pets,
})

export const receivePet = pet => ({
    type: RECEIVE_PET,
    pet,
})

//thunk action creator
export const requestPets = () => dispatch => {
    return getPets()
            .then(pets => dispatch(receivePets(pets)))
            .catch(err => console.log(err))
}

export const requestPet = (petId) => dispatch => {
    return getPet(petId)
            .then((pet) => dispatch(receivePet(pet)))
            .catch(err => console.log(err))
}
