import React from "react";

export const Item = ({ id, item, items, setItems }) => {
  function checkHandler() {
    const newItems = [...items];
    newItems[id].isChecked = !item.isChecked;
    setItems(newItems);
  }

  function removeItemHandler() {
    const newItems = [...items];
    newItems.splice(id, 1);
    setItems(newItems);
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
      }}
    >
      <input
        type="checkbox"
        style={{ width: "15px", height: "15px", marginTop: "0.3em" }}
        checked={item.isChecked}
        onClick={checkHandler}
      />
      <p
        style={{
          color: "white",
          textDecoration: item.isChecked && "line-through",
        }}
      >{`${item.quantity} ${item.value}`}</p>
      <button
        style={{
          border: "none",
          outline: "none",
          backgroundColor: "transparent",
          cursor: "pointer",
        }}
        onClick={removeItemHandler}
      >
        ❌
      </button>
    </div>
  );
};
