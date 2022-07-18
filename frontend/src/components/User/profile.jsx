import React from 'react';
import { formatDate } from '../../util/date_util';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.ownProps.match.params.id);
    this.props.fetchUsers();
    this.props.requestPets();
  }

  pets() {
    const { pets } = this.props;
    if(!pets) return null;
    return (
      
        (pets.length === 0) ? 
          <div className='no-pets'>you have no pets ┏༼ ◉╭╮◉༽┓</div>  
        : 
      <div className='pets-list'>
        {
          pets.map((pet, i) => {
            const today = new Date();
            const birthDate = new Date(pet.birthday)
            let age = today.getFullYear() - birthDate.getFullYear();
            let m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
              age--;
            }

            return <div  key={i}>
              <Link className='pet-item' to={`/pets/${pet._id}`}>
                <div className='pet-thumbnail'>
                  <img src={pet.profileUrl} alt='loading...' />
                </div>
            
                <div className='pet-item-info'>
                  <p>Name: {pet.name}</p>
                  <p>Breed: {pet.breed}</p>
                  <p>Age: {age}</p>
                  <p>Gender: {pet.gender}</p>
                </div>
              </Link>
            </div>
          })
        }
      </div>
    )
  }
  
  profile() {
    const { username, dateJoined, points, bio, id } = this.props.user;
    return (
      <div className='user-page'>
        <div className='user-info'>
          <div className='user-info-title'>
            all about { this.props.user.id === this.props.currentUser.id ? 'you' : this.props.user.username}
          </div>

          <div className='user-details'>
            <div>Username: {username}</div>
            <div>Date Joined: {formatDate(dateJoined)}</div>
            <div>Points: {points}</div>
            <div>Bio: {bio}</div>
            {
              this.props.user.id === this.props.currentUser.id ?
              <div className='user-edit-btn'>
                <Link to={`/users/${id}/edit`}>Edit ur info</Link>
              </div> :
              null
            }
          </div>
        </div>

        <div className='user-pets'>
          <div className='pets-list'>
            <div className='pets-list-title'>{this.props.user.id === this.props.currentUser.id ? 'your' : `${this.props.user.username}'s`} pets</div>

            {this.pets()}
          </div>
        </div>
      </div>
    )
  }

  render() {
    if(!this.props.user) return null;
    if(!this.props.currentUser) return null;
    if(!this.props.users) return null;

    // debugger
    if (Object.values(this.props.users).length === 0) return <div>User does not exist</div>;
    return (
      <div div className='user-page-parent'>
        {this.profile()}
      </div>
    )
  }
}

export default Profile;
