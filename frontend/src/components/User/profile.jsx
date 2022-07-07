import React from 'react';
import { formatDate } from '../../util/date_util';
import FriendIndex from '../friend/friend_index';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.friend=this.friend.bind(this)
    this.unfriend=this.unfriend.bind(this)
    this.approvefriendrequest=this.approvefriendrequest.bind(this)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.ownProps.match.params.id);
    this.props.fetchUsers();
    this.props.requestPets();
  }
  friend() {
    this.props.incomingaddfriend(this.props.currentUser, this.props.user.id)
    this.props.outgoingaddfriend(this.props.currentUser, this.props.user.id)
  }
  unfriend(){
    this.props.Unfriend1(this.props.currentUser, this.props.user.id)
    this.props.Unfriend2(this.props.currentUser, this.props.user.id)
  }
  approvefriendrequest(userid) {
    this.props.Acceptfriendrequest1(this.props.currentUser, userid)
    this.props.Acceptfriendrequest2(this.props.currentUser, userid)
    this.props.Acceptfriendrequest3(this.props.currentUser, userid)
    this.props.Acceptfriendrequest4(this.props.currentUser, userid)
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

            <div className='friends-index'>
              <FriendIndex 
                users={this.props.users} 
                user={this.props.user} 
                ownProps={this.props.ownProps} 
                fetchUser={this.props.fetchUser}
              />
            </div>
            {
            this.props.user.id===this.props.currentUser.id?"":
            this.props.user.friends.includes(this.props.currentUser.id)?
            <button className='friend' onClick={this.unfriend}>Unfriend</button>:
            this.props.user.friendRequests.includes(this.props.currentUser.id)?
            <p>Friend Requested</p>
            :<button className='friend' onClick={this.friend}>Friend</button>}

            {this.props.user.id === this.props.currentUser.id? this.friendRequests():""}
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
  friendRequests() {
    return (
      <div className='friend-requests'>
        <p>friend requests:</p>
      {this.props.currentUser.friendRequests.map(userid=><button className='friend-requests-button' onClick={()=>this.approvefriendrequest(userid)}> Approve Friend Request: {`${this.props.users.filter(user=>user._id===userid)[0].username}`}</button>)}
      </div>
      )
  }
  render() {
    if(!this.props.user) return null;
    if(!this.props.currentUser) return null;
    if(!this.props.users) return null;

    debugger
    if (Object.values(this.props.users).length === 0) return <div>User does not exist</div>;
    return (
      <div div className='user-page-parent'>
        {this.profile()}
      </div>
    )
  }
}

export default Profile;
