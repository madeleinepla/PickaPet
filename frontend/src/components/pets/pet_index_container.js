import { connect } from 'react-redux'
import PetIndex from './pet_index'
import {requestPets} from '../../actions/pet_actions' 

const mSTP = (state) => {
    // debugger
    return {
        pets: Object.values(state.entities.pets.all)
    }
}

const mDTP = (dispatch) => {
    return {
        requestPets: (() => dispatch(requestPets()))
    }
}

export default connect(mSTP, mDTP)(PetIndex)