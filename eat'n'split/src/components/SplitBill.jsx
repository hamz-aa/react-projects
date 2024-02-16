/* eslint-disable react/prop-types */
function SplitBill({ friendsList, setFriendsList, friend }) {
  let billValue, yourExpense, friendExpense, whoPayed;

  function splitBillHandler() {
    let newList = [...friendsList];
    let ind = newList.findIndex((item) => item.name === friend.name);
    newList[ind].totalBill = Number(billValue);
    newList[ind].friendExpense = Number(friendExpense);
    newList[ind].myExpense = Number(yourExpense);
    newList[ind].isPayed = Boolean(whoPayed);
    setFriendsList(newList);
  }

  return (
    <div className="split-bill">
      <h3>split a bill with {friend.name}</h3>
      <label htmlFor="bill-value">
        <p>💰 Bill Value </p>
        <input
          type="text"
          id="bill-value"
          onChange={(e) => (billValue = e.target.value)}
        />
      </label>
      <label htmlFor="your-expense">
        <p>🧍 Your Expense</p>
        <input
          type="text"
          id="your-expense"
          onChange={(e) => (yourExpense = e.target.value)}
        />
      </label>
      <label htmlFor="friend-expense">
        <p>👫🏻 {friend.name} Expense</p>
        <input
          type="text"
          id="friend-expense"
          onChange={(e) => (friendExpense = e.target.value)}
        />
      </label>
      <label htmlFor="who-payed">
        <p>🤑 Who is paying the bill?</p>
        <select id="who-payed" onChange={(e) => (whoPayed = e.target.value)}>
          <option value="false">You</option>
          <option value="true">{friend.name}</option>
        </select>
      </label>
      <button onClick={splitBillHandler}>Split Bill</button>
    </div>
  );
}

export default SplitBill;
