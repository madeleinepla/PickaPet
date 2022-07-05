import { RECEIVE_PETS, RECEIVE_PET } from "../../actions/pet_actions";

const PetsReducer = (state = {}, action) => {

    Object.freeze(state);

    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_PETS:
            newState.all = action.pets.data;
            return newState;
        case RECEIVE_PET:
            newState.pet = action.pet.data;
            return newState;
        default:
            return state;
    }
};

export default PetsReducer;