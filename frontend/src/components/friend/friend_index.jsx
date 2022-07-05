import React from 'react';

class FriendIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    // debugger
    const { friends } = this.props

    return (
      <div>
        <ul>
          {
          friends.map((friend) => {
            return <li>
              {friend.username}
            </li>
          }
          )}
        </ul>
      </div>
    );
  }
}

export default FriendIndex;