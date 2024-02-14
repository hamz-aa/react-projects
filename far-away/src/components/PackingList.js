import React from "react";
import { Item } from "./Item";

export const PackingList = ({ items }) => {
  return (
    <div
      style={{
        minHeight: "60vh",
        backgroundColor: "#573419",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div className="items" style={{ padding: "2em 5em" }}>
        {items.map((item) => (
          <Item />
        ))}
      </div>
      <div
        className="buttons"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          padding: "1em 0",
        }}
      >
        <select name="" id="">
          <option value="">SORT BY NUMBER</option>
        </select>
        <button>CLEAR LIST</button>
      </div>
    </div>
  );
};
