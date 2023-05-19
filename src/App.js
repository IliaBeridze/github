import Card from "./components/card/Card";
import moon from "./components/icon/Path.png";
import sun from "./components/icon/002-sun.png";
import SearchIcon from "./components/icon/search.png";
import Search from "./components/search/Search";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [dark, setDark] = useState(false);
  const [user, setUser] = useState([]);
  const [value, setValue] = useState("octocat");
  const [message, setMessage] = useState(false)

  useEffect(() => {
    getInfo()
  }, []);

  function getValue(e) {
    setValue(e.target.value);
  }
  console.log(user);
  console.log(user.message);
  function getInfo() {
    fetch(`https://api.github.com/users/${value}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        if(data.message === "Not Found" ){
          setMessage(!message)
          return fetch("https://api.github.com/users/octocat")
          .then((response) => response.json())
          .then((data) => {
            setUser(data);
          });
        }
        setUser(data);
      });
  }

  return (
    <div
      style={{
        background: dark ? "#141D2F" : "#f2f2f2",
        color: dark ? "#fff" : "#141D2F",
      }}
      className="App"
    >
      <div className="dark">
        <p>devfinder</p>
        {dark ? (
          <img onClick={() => setDark(!dark)} src={sun} alt="sun" />
        ) : (
          <img onClick={() => setDark(!dark)} src={moon} alt="icon" />
        )}
      </div>

      <Search
        SearchIcon={SearchIcon}
        getValue={getValue}
        getInfo={getInfo}
        dark={dark}
        message={message ? "No results" : ""}
      />
      <Card
        location={user.location}
        company={user.company}
        twitter_username={user.twitter_username}
        blog={user.blog}
        dark={dark}
        img={user.avatar_url}
        name={user.name}
        repos={user.public_repos}
        followers={user.followers}
        following={user.following}
      />
    </div>
  );
}

export default App;
