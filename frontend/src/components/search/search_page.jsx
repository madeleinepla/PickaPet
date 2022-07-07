import React from "react";
class searchResults extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {        
        this.props.requestPets()
        this.props.fetchSearchUsers(this.props.location.search.split("?")[1])

    }
    render () {
        if (this.props.pets.length===0 || this.props.users.length===0) {
            return null
        }
        debugger
        let users = this.props.users
        .filter(user=>user.username.toLowerCase().includes(this.state.search.toLowerCase()))
        return (
            <div className="search">
                    <div className="search-users-container">
                        <div className="search-users">
                        {users.map(user=><div className="search-users-user" key={user.id}>
                            <div className="search-pets">
                                <p className="search-users-username">{user.username}</p>
                                <br />
                                {this.props.pets.filter(pet=>user.pets.includes(pet._id)).map(pet=>
                                    <div className="search-pet">
                                        <img className="search-pet-photo" src={pet.profileUrl} alt="pet photo" />
                                        <div>
                                            <p>{pet.name}</p>
                                            <p>{pet.species}</p>
                                            <p>{pet.breed}</p>

                                        </div>
                                    </div>
                                    )}
                            </div>
                            </div>)}
                        </div>
                    </div>
            </div>
        )
    }
}
export default searchResults