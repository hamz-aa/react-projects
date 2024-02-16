/* eslint-disable react/prop-types */
function Friend({ friend, setStatus, status }) {
  let defaultText, color;
  if (friend.totalBill === 0) {
    defaultText = `You and ${friend.name} are even`;
    color = "black";
  } else if (friend.isPayed === false) {
    defaultText = `${friend.name} owes you $${friend.friendExpense}`;
    color = "green";
  } else {
    defaultText = `You owe ${friend.name} $${friend.myExpense}`;
    color = "red";
  }

  function selectFriend() {
    if (status && status.name === friend.name) {
      setStatus(null);
    } else {
      setStatus(friend);
    }
  }

  return (
    <div className="friend">
      <img src={friend.imgUrl} alt="" />
      <div className="info">
        <p>{friend.name}</p>
        <p style={{ color: color }}>{defaultText}</p>
      </div>
      <button onClick={selectFriend}>
        {status && status.name === friend.name ? "Close" : "Select"}
      </button>
    </div>
  );
}

export default Friend;
