import Active from "../active/Active";
import "./Card.scss";

import React from "react";

export default function Card({ img, name, dark, repos,followers,following }) {
  return (
    <div style={{ background: dark ? "#1E2A47" : "#FEFEFE" }} className="card">
      <div>
        <img className="profile-picture" src={img} alt="profilePicture" />
      </div>
      <div className="infocard">
        <p className="name">{name}</p>
        <p>joined</p>
        <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
        </p>
        <div  style={{background: dark? "#141D2F":"#F6F8FF"}} className="active-card">
          
          <Active text={"repos"} quantity={repos} dark={dark} />
          <Active text={"Followers"} quantity={followers} dark={dark}/>
          <Active text={"Following"} quantity={following} dark={dark}/>
        </div>
        <div className="footer">
          
        </div>
      </div>
    </div>
  );
}
