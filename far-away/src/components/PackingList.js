import React from "react";
import { Item } from "./Item";

export const PackingList = ({ items, setItems }) => {
  function sortItems(sortingCondition) {
    if (items.length <= 1) return;
    const newItems = [...items];
    if (sortingCondition === "quantity" || sortingCondition === "order") {
      newItems.sort((a, b) => a[sortingCondition] - b[sortingCondition]);
    } else {
      newItems.sort(
        (a, b) => Number(b[sortingCondition]) - Number(a[sortingCondition])
      );
    }
    setItems(newItems);
  }

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
        {items.map((item, index) => (
          <Item id={index} item={item} items={items} setItems={setItems} />
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
        <select name="" id="" onChange={(e) => sortItems(e.target.value)}>
          <option onClick={() => sortItems("order")} value="order">
            SORT BY INPUT ORDER
          </option>
          <option onClick={() => sortItems("quantity")} value="quantity">
            SORT BY DESCRIPTION
          </option>
          <option onClick={() => sortItems("isChecked")} value="isChecked">
            SORT BY PACKED STATUS
          </option>
        </select>
        <button onClick={() => setItems([])}>CLEAR LIST</button>
      </div>
    </div>
  );
};
