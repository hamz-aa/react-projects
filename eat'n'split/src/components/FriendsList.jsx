/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Friend from "./Friend";

function FriendsList({ friendsList, setFriend }) {
  return (
    <div className="friendsList">
      {friendsList.map((friend) => (
        <Friend friend={friend} setFriend={setFriend} />
      ))}
    </div>
  );
}

export default FriendsList;
