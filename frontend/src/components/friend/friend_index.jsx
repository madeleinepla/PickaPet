import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const FriendIndex = ({ users, user, fetchUser, ownProps }) => {
  useEffect(() => {
    fetchUser(ownProps.match.params.id)
  },[ownProps.match.params.id])

  if (!(users && user && user.friends)) {
    return null;
  }

  const friends = users.filter((friend) => {
    return user.friends.includes(friend._id)
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
              friends.map((friend, i) => {
                return <Link key={i} className='friend-item' to={`/users/${friend._id}`}><li >{friend.username}</li></Link>
                // return <li className='friend-item' key={i}><Link to={`/users/${friend._id}`}>{friend.username}</Link></li>
              })
            }
          </ul>
      }
    </div>
  );
};

export default FriendIndex;