import React from 'react';
import { formatDate } from '../../util/date_util';
import FriendIndex from '../friend/friend_index';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.ownProps.match.params.id);
    this.props.fetchUsers();
  }

  profile() {
    const { username, dateJoined, points, pets } = this.props.currentUser;
    return (
      this.props.currentUser.id === this.props.ownProps.match.params.id ? (
        <div>
          <div>This is your profile page</div>
          <div><span>Username:</span> {username}</div>
          <div><span>Date Joined:</span> {formatDate(dateJoined)}</div>
          <div><span>Points:</span> {points}</div>
          <div><span>Pets:</span> {pets}</div>
          <div>
            <FriendIndex users={this.props.users} currentUser={this.props.currentUser}/>
          </div>
        </div>
      ) : (
        <div>
          <div>This is someone else's profile page</div>
          <div><span>Username:</span> {username}</div>
          <div><span>Date Joined:</span> {formatDate(dateJoined)}</div>
          <div><span>Points:</span> {points}</div>
          <div><span>Pets:</span> {pets}</div>
        </div>
      )
    )
  }

  render() {
    // debugger
    if (Object.values(this.props.users).length === 0) return <div>User does not exist</div>;
    return (
      <div>
        {this.profile()}
      </div>
    )
  }
}

export default Profile;