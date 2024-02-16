import { useState } from "react";

/* eslint-disable react/prop-types */
function AddFriend({ friendsList, setFriendsList }) {
  let imgValue;

  const [flag, setFlag] = useState(false);
  const [nameValue, setNameValue] = useState("");

  function changeHandler(e) {
    friendsList.find(
      (friend) => friend.name.toLowerCase() === e.target.value.toLowerCase()
    )
      ? setFlag(true)
      : setFlag(false);
    setNameValue(e.target.value);
  }

  function addFriend() {
    if (
      !friendsList.find(
        (friend) => friend.name.toLowerCase() === nameValue.toLowerCase()
      ) &&
      nameValue &&
      nameValue.trim() !== "" &&
      imgValue &&
      imgValue.trim() !== ""
    ) {
      setFlag(false);
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
    setFlag(true);
  }

  return (
    <div className="addFriend">
      <label htmlFor="name">
        <p>👫🏻 Friend name </p>
        <input type="text" id="name" onChange={(e) => changeHandler(e)} />
      </label>
      <p
        style={{
          color: "red",
          fontSize: "0.9rem",
          margin: "0",
          marginLeft: "auto",
          display: flag ? "block" : "none",
        }}
      >
        *name already exists
      </p>
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
