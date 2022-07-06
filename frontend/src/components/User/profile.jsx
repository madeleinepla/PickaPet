import React from 'react';
import { formatDate } from '../../util/date_util';
import FriendIndex from '../friend/friend_index';
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
      <div className='pets-list'>
        {
          pets.map((pet, i) => {
            const today = new Date();
            const birthDate = new Date(pet.birthday)
            const age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
              age--;
            }

            return <div  key={i}>
              <Link className='pet-item' to={`/pets/${pet._id}`}>
                <div className='pet-thumbnail'>
                  <img src={pet.profileUrl} alt='loading...' />
                </div>
            
                <div className='pet-info'>
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

  // profile() {
  //   // debugger;
  //   const { username, dateJoined, points } = this.props.currentUser;
  //   return (
  //     this.props.currentUser.id === this.props.ownProps.match.params.id ? (
  //       <div className='user-page'>
  //         <div className='user-info'>
  //           <div className='user-details'>
  //             <div><span>Username:</span> {username}</div>
  //             <div><span>Date Joined:</span> {formatDate(dateJoined)}</div>
  //             <div><span>Points:</span> {points}</div>
  //           </div>

  //           <div className='friends-index'>
  //             <FriendIndex users={this.props.users} currentUser={this.props.currentUser}/>
  //           </div>
  //         </div>
          
  //         <div className='user-pets'>
  //           <div className='pets-list'>
  //             <div className='pets-list-title'>{`${username} 's Pets`}</div>

  //             {this.pets()}
  //           </div>
  //         </div>
  //       </div>
  //     ) : (
  //       <div className='user-page'>
  //         <div className='user-info'>
  //           <div className='user-details'>
  //             <div><span>Username:</span> {this.props.user.username}</div>
  //             <div><span>Date Joined:</span> {formatDate(this.props.user.dateJoined)}</div>
  //             <div><span>Points:</span> {this.props.user.points}</div>
  //           </div>
  //         </div>

  //         <div className='user-pets'>
  //           <div className='pets-list'>
  //               <div className='pets-list-title'>{`${this.props.user.username} 's Pets`}</div>

  //               {this.pets()}
  //           </div>
  //         </div>
  //       </div>
  //     )
  //   )
  // }

  profile() {
    // debugger;
    const { username, dateJoined, points, bio } = this.props.user;
    return (
      <div className='user-page'>
        <div className='user-info'>
          <div className='user-details'>
            <div>Username: {username}</div>
            <div>Date Joined:{formatDate(dateJoined)}</div>
            <div>Points: {points}</div>
            <div>Bio: {bio}</div>

          </div>

            <div className='friends-index'>
              <FriendIndex 
                users={this.props.users} 
                user={this.props.user} 
                ownProps={this.props.ownProps} 
                fetchUser={this.props.fetchUser}
              />
            </div>
        </div>

        <div className='user-pets'>
          <div className='pets-list'>
            <div className='pets-list-title'>{`${username} 's Pets`}</div>

            {this.pets()}
          </div>
        </div>
      </div>
    )
  }

  render() {
    // debugger
    if(!this.props.user) return null;
    if (Object.values(this.props.users).length === 0) return <div>User does not exist</div>;
    return (
      <div div className='user-page-parent'>
        {this.profile()}
      </div>
    )
  }
}

export default Profile;