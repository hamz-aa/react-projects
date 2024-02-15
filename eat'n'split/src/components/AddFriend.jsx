/* eslint-disable react/prop-types */
function AddFriend({ setFriendsList }) {
  return (
    <div className="addFriend">
      <label htmlFor="name">
        <p>👫🏻 Friend name </p>
        <input type="text" id="name" />
      </label>
      <label htmlFor="image">
        <p>🖼️ Image URL</p>
        <input type="text" id="image" />
      </label>
      <button>Add</button>
    </div>
  );
}

export default AddFriend;
