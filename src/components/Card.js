
import React from "react";

function Card({ children }) {
  return (
    <div
      style={{
        width: "400px",
        margin: "50px auto",
        padding: "25px",
        borderRadius: "10px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
      }}
    >
      {children}
    </div>
  );
}

export default Card;

