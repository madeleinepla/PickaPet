import React from 'react';
import { Link } from 'react-router-dom';

class searchResults extends React.Component {
    componentDidMount() {        
        this.props.requestPets()
        this.props.searchusers(this.props.location.search.split("?")[1])

    }

    componentDidUpdate(prevProps) {
        if (this.props.location.search !== prevProps.location.search)
        this.props.searchusers(this.props.location.search.split("?")[1])
    }

    render () {
        if (this.props.pets.length===0 || this.props.users.length===0) {
            return <div className='no-search-result'> No user found. Please try another search.</div>
        }
        if (!Array.isArray(this.props.users)) return null
        let users = this.props.users
        return (
            <div className="search">
                <div className="search-header">Search Results: {users.length}</div>
                    <div className="search-users-container">
                        <div className="search-users">
                        {users.map((user, i)=>
                        <Link to={`/users/${user._id}`} style={{ textDecoration: 'none' }} key={i}>
                            <div className="search-users-user" key={user.id}>
                                <div className="search-pets">
                                    <p className="search-users-username">{user.username}</p>
                                    <div className='search-pet-container'>
                                    {this.props.pets.filter(pet=>user.pets.includes(pet._id)).map((pet, i)=>
                                        <div className="search-pet" key={i}>
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
                            </div>
                            </Link>)}
                        </div>
                    </div>
            </div>
        )
    }
}
export default searchResults

