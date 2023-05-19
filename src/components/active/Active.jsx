import "./Active.scss";
import React from "react";

export default function Active({ text, quantity ,dark }) {
  return (
    <div className="active" >
      <p  style={{color: dark&& "#FFF"}} className="active-text">{text}</p>
      <p style={{color: dark&& "#FFF"}} className="quantity">{quantity}</p>
    </div>
  );
}
