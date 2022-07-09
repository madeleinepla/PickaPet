import { connect } from "react-redux"
import { fetchUsers, searchusers } from "../../actions/user_actions"
import {requestPets} from "../../actions/pet_actions"
import searchResults from "./search_results"

const mSTP = (state, ownProps) => {
    const pets = Object.values(state.entities.pets.all)
    const users = Object.values(state.entities.users.all)
    return {
    users: users,
    pets:pets,
}}
const mDTP = dispatch => ({
    requestPets: ()=>dispatch(requestPets()),
    searchusers: (query)=>dispatch(searchusers(query))
})
export default connect(mSTP, mDTP)(searchResults)