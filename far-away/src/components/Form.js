import React, { useState } from "react";
import { useRef } from "react";

export const Form = ({ items, setItems }) => {
  const [numValue, setNumValue] = useState(1);
  const [inpValue, setInpValue] = useState();
  const [order, setOrder] = useState(1);

  const inpRef = useRef("");

  function insertItem() {
    if (
      numValue === undefined ||
      inpValue === undefined ||
      inpValue.trim() === ""
    )
      return;
    setItems([
      ...items,
      { order: order, quantity: numValue, value: inpValue, isChecked: false },
    ]);
    inpRef.current.value = "";
    setInpValue("");
    setOrder(order + 1);
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
        onChange={(e) => setNumValue(e.target.value)}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((el, index) => (
          <option id={index} value={el}>
            {el}
          </option>
        ))}
      </select>
      <input
        type="text"
        name=""
        id=""
        placeholder="item..."
        onChange={(e) => setInpValue(e.target.value)}
        ref={inpRef}
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
