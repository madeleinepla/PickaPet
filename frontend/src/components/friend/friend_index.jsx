import React from 'react';

const FriendIndex = ({ users, currentUser }) => {
  if (!users) {
    return null;
  }

  const friends = users.filter((user) => {
    return currentUser.friends.includes(user._id)
  })

  return (
    <div>
      <h1>Friend List:</h1>
      {
        friends.length === 0 ?
          <h2>you have no friends ┏༼ ◉╭╮◉༽┓</h2>
        :
          <ul>
            {
              friends.map(friend => {
                return <li>friend.username</li>
              })
            }
          </ul>
      }
    </div>
  );
};

export default FriendIndex;