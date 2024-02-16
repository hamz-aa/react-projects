/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Friend from "./Friend";

function FriendsList({ friendsList, setFriend, friend }) {
  return (
    <div className="friendsList">
      {friendsList?.map((el) => (
        <Friend friend={el} setStatus={setFriend} status={friend} />
      ))}
    </div>
  );
}

export default FriendsList;
