import React from "react";
class search extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {search:""}
        this.update = this.update.bind(this)
    }
    update(e) {
        e.preventDefault()
        this.setState({["search"]:e.currentTarget.value})
    }
    componentDidMount() {        
        this.props.requestPets()
        this.props.fetchUsers()

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
                    <form className="search-bar-container">
                        <input className="search-bar-input"type="text" value={this.state.search} placeholder="search" onChange={this.update}></input>
                    </form>
                    <div className="search-users-container">
                        <div className="search-users">
                        {users.map(user=><div onClick={()=>window.location=`/#/users/${user._id}`} className="search-users-user" key={user.id}>
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
export default search