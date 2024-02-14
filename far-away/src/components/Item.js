import React from "react";

export const Item = () => {
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
      />
      <p style={{ color: "white" }}>1 Sock</p>
      <button
        style={{
          border: "none",
          outline: "none",
          backgroundColor: "transparent",
          cursor: "pointer",
        }}
      >
        ❌
      </button>
    </div>
  );
};
