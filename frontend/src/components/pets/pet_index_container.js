import { connect } from 'react-redux'
import PetIndex from './pet_index'
import {requestPets} from '../../actions/pet_actions' 
import { fetchUser } from '../../actions/user_actions';

const mSTP = (state, ownProps) => {
    // debugger
    return {
        pets: Object.values(state.entities.pets.all),
        user: state.entities.users.user,
        currentUser: state.session.user,
        ownProps
    }
}

const mDTP = (dispatch) => {
    return {
        requestPets: (() => dispatch(requestPets())),
        fetchUser: (userId) => dispatch(fetchUser(userId)),
    }
}

export default connect(mSTP, mDTP)(PetIndex)