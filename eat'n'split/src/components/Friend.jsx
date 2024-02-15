/* eslint-disable react/prop-types */
function Friend({ friend }) {
  let defaultText;
  if (friend.bill === 0) defaultText = `You and ${friend.name} are even`;
  else if (friend.bill > 0)
    defaultText = `${friend.name} owes you $${friend.bill}`;
  else defaultText = `You owe ${friend.name} $${friend.bill}`;

  return (
    <div className="friend">
      <img src={friend.imgUrl} alt="" />
      <div className="info">
        <p>{friend.name}</p>
        <p>{defaultText}</p>
      </div>
      <button>Select</button>
    </div>
  );
}

export default Friend;
