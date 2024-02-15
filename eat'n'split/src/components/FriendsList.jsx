/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Friend from "./Friend";

function FriendsList({ friendsList }) {
  return (
    <div className="friendsList">
      {friendsList.map((friend) => (
        <Friend friend={friend} />
      ))}
    </div>
  );
}

export default FriendsList;
