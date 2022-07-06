import { connect } from "react-redux"
import { fetchUsers } from "../../actions/user_actions"
import {requestPets} from "../../actions/pet_actions"
import search from "./search"

const mSTP = (state, ownProps) => {
    const pets = Object.values(state.entities.pets.all)
    const users = Object.values(state.entities.users.all)
    return {
    users: users,
    pets:pets,
}}
const mDTP = dispatch => ({
    fetchUsers: ()=>dispatch(fetchUsers()),
    requestPets: ()=>dispatch(requestPets())
})
export default connect(mSTP, mDTP)(search)