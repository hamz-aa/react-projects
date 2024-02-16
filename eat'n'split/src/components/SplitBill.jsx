/* eslint-disable react/prop-types */
function SplitBill({ friendsList, setFriendsList, friend }) {
  return (
    <div className="split-bill">
      <h3>split a bill with {friend.name}</h3>
      <label htmlFor="bill-value">
        <p>💰 Bill Value </p>
        <input type="text" id="bill-value" />
      </label>
      <label htmlFor="your-expense">
        <p>🧍 Your Expense</p>
        <input type="text" id="your-expense" />
      </label>
      <label htmlFor="friend-expense">
        <p>👫🏻 {friend.name} Expense</p>
        <input type="text" id="friend-expense" />
      </label>
      <label htmlFor="who-payed">
        <p>🤑 Who is paying the bill?</p>
        <select id="who-payed">
          <option value="false">You</option>
          <option value="true">{friend.name}</option>
        </select>
      </label>
      <button>Split Bill</button>
    </div>
  );
}

export default SplitBill;
