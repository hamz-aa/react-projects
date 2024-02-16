/* eslint-disable react/prop-types */
function AddFriend({ friendsList, setFriendsList }) {
  let nameValue, imgValue;

  function addFriend() {
    setFriendsList([
      ...friendsList,
      {
        name: nameValue,
        imgUrl: imgValue,
        totalBill: 0,
        friendExpense: 0,
        myExpense: 0,
        isPayed: null,
      },
    ]);
  }

  return (
    <div className="addFriend">
      <label htmlFor="name">
        <p>👫🏻 Friend name </p>
        <input
          type="text"
          id="name"
          onChange={(e) => (nameValue = e.target.value)}
        />
      </label>
      <label htmlFor="image">
        <p>🖼️ Image URL</p>
        <input
          type="text"
          id="image"
          onChange={(e) => (imgValue = e.target.value)}
        />
      </label>
      <button onClick={addFriend}>Add</button>
    </div>
  );
}

export default AddFriend;
