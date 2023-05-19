import "./Search.scss";
import search from "../../components/icon/search.png";
import React from "react";

export default function Search({
  getValue,
  getInfo,
  dark,
  message,
  searchIcon,
}) {
  return (
    <div
      className="search"
      style={{ background: dark ? "#1E2A47" : "#FEFEFE" }}
    >
      <img src={search} alt="search" />
      <input
        className="search-input"
        type="text"
        placeholder="Search GitHub username…"
        onChange={getValue}
      />
      <p>{message}</p>
      <button className="search-btn" onClick={getInfo}>
        Search
      </button>
    </div>
  );
}
