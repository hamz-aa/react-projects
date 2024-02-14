import React from "react";

export const Form = ({ items, setItems }) => {
  let numValue, inpValue;

  function insertItem() {
    setItems([
      ...items,
      { quantity: numValue, value: inpValue, isChecked: false },
    ]);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        backgroundColor: "#df6b1b",
        padding: "1.5em 0",
      }}
      className="form"
    >
      <h3 style={{ fontWeight: "500", color: "#573419" }}>
        What do you need for your 😍 trip?
      </h3>
      <select
        name=""
        id=""
        style={{ fontWeight: "600" }}
        onChange={(e) => (numValue = e.target.value)}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((el) => (
          <option value={el}>{el}</option>
        ))}
      </select>
      <input
        type="text"
        name=""
        id=""
        placeholder="item..."
        onChange={(e) => (inpValue = e.target.value)}
      />
      <button
        style={{
          backgroundColor: "#67c1a3",
          color: "#573419",
          fontWeight: "600",
        }}
        onClick={insertItem}
      >
        ADD
      </button>
    </div>
  );
};
