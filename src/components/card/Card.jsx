import "./Card.scss";
import Active from "../active/Active";
// import React, { useState } from "react";

export default function Card({
  img,
  name,
  dark,
  repos,
  followers,
  following,
  joined,
}) {


  return (
    <div style={{ background: dark ? "#1E2A47" : "#FEFEFE" }} className="card">
      <div>
        <img  className="profile-picture" src={img} alt="profilePicture" />
      </div>
      <div className="infocard">
        <p className="name"> name: {name}</p>
        <p>joined: {joined ? joined.slice(0,10):""}</p>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>
        <div
          style={{ background: dark ? "#141D2F" : "#F6F8FF" }}
          className="active-card"
        >
          <Active text={"repos"} quantity={repos} dark={dark} />
          <Active text={"Followers"} quantity={followers} dark={dark} />
          <Active text={"Following"} quantity={following} dark={dark} />
        </div>
      </div>
    </div>
  );
}
