import React from 'react';

function FriendList({ friends, selectedFriend, onSelectFriend }) {
  return (
    <div className="friend-list">
      <h3>Friends</h3>
      {friends.map((friend) => (
        <div
          key={friend}
          className={`friend-item ${selectedFriend === friend ? 'active' : ''}`}
          onClick={() => onSelectFriend(friend)}
        >
          {friend}
        </div>
      ))}
    </div>
  );
}

export default FriendList;