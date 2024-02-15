import React from "react";

export const Stats = ({ items }) => {
  let text = "💼 start adding items to your list";
  let len = items.length;
  if (len >= 1) {
    const packed = items.filter((item) => item.isChecked);
    const percentage = ((packed.length / len) * 100).toFixed(2);
    text = `💼 You have ${len} items on your list, and you already packed ${packed.length} (${percentage}%)`;
  }

  return (
    <div style={{ backgroundColor: "#67c1a3", padding: "1em 0" }}>
      <h3
        style={{
          fontWeight: "500",
          textAlign: "center",
          fontStyle: "italic",
          color: "#4c3423",
        }}
      >
        {text}
      </h3>
    </div>
  );
};
