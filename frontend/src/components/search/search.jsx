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
        if(this.state.search==="") {
            users = [];
        }
        return (
            <div className="search">
                
                    <form className="search-bar-container">
                        <input className="search-bar-input"type="text" value={this.state.search} placeholder="search" onChange={this.update}></input>
                        <p className="search-bar-submit"onClick={()=>window.location=`/#/search-results?${this.state.search}`}>Search</p>
                    </form>
                    <div className="search-users-container">
                        <div className="search-users">
                        {users.map(user=><div className="search-dropdown-users-user" key={user.id}>
                            <div className="search-pets">
                                <p className="search-users-username">{user.username}</p>
                            </div>
                            </div>)}
                        </div>
                    </div>
            </div>
        )
    }
}
export default search