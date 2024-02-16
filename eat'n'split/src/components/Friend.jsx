/* eslint-disable react/prop-types */
function Friend({ friend, setFriend }) {
  let defaultText;
  if (friend.totalBill === 0) defaultText = `You and ${friend.name} are even`;
  else if (friend.isPayed === false)
    defaultText = `${friend.name} owes you $${friend.bill}`;
  else defaultText = `You owe ${friend.name} $${friend.bill}`;

  function selectFriend() {
    if (friend) {
      setFriend(null);
    } else {
      setFriend(friend);
    }
  }

  return (
    <div className="friend">
      <img src={friend.imgUrl} alt="" />
      <div className="info">
        <p>{friend.name}</p>
        <p>{defaultText}</p>
      </div>
      <button onClick={selectFriend}>{friend ? "Close" : "Select"}</button>
    </div>
  );
}

export default Friend;