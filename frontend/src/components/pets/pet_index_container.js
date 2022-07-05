import { connect } from 'react-redux'
import PetIndex from './pet_index'

const mSTP = (state) => {
    return {
        pets: state.entities.pets
    }
}

const mDTP = (dispatch) => {
    return {
        requestPets: () => dispatch(requestPets())
    }
}

export default connect(mSTP, mDTP)(PetIndex)