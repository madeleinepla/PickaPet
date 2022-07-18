import React from 'react';
import { Link } from 'react-router-dom';
class searchResults extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {        
        this.props.requestPets()
        this.props.searchusers(this.props.location.search.split("?")[1])

    }

    componentDidUpdate(prevProps) {
        if (this.props.location.search !== prevProps.location.search)
        this.props.searchusers(this.props.location.search.split("?")[1])
    }

    render () {
        // debugger
        if (this.props.pets.length===0 || this.props.users.length===0) {
            // return null
            return <div className='no-search-result'> No user found. Please try another search.</div>
        }
        if (!Array.isArray(this.props.users)) return null
        let users = this.props.users
        // debugger
        return (
            <div className="search">
                <div className="search-header">Search Results: {users.length}</div>
                    <div className="search-users-container">
                        <div className="search-users">
                        {users.map(user=>
                        <Link to={`/users/${user._id}`} style={{ textDecoration: 'none' }}>
                            <div className="search-users-user" key={user.id}>
                                <div className="search-pets">
                                    <p className="search-users-username">{user.username}</p>
                                    <br />
                                    {this.props.pets.filter(pet=>user.pets.includes(pet._id)).map(pet=>
                                        <div className="search-pet">
                                            <img className="search-pet-photo" src={pet.profileUrl} alt="pet pic" />
                                            <div>
                                                <p>{pet.name}</p>
                                                <p>{pet.species}</p>
                                                <p>{pet.breed}</p>

                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            </Link>)}
                        </div>
                    </div>
            </div>
        )
    }
}
export default searchResults

