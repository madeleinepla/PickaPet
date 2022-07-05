import React from 'react';
import { formatDate } from '../../util/date_util';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.ownProps.match.params.id);
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