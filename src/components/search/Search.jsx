import "./Search.scss";
import search from "../../components/icon/search.png";


export default function Search({ getValue, getInfo, dark, message}) {

  let checkResult = message? "no-result" : "";

  return (
    <div
      className="search"
      style={{ background: dark ? "#1E2A47" : "#FEFEFE" }}
    >
      <img src={search} alt="search" />
      <input
        className={`search-input ${checkResult}`}
        type="text"
        placeholder="Search GitHub username…"
        onChange={getValue}
      />
      <p>{message ? "no-result":" "}</p>
      <button className="search-btn" onClick={getInfo}>
        Search
      </button>
    </div>
  );
}
