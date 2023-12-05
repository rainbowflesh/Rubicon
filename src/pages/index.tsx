import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";

function App() {
  const [searchResult, setSearchResult] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  async function search() {
    setSearchResult(await invoke("search", { searchKeyword }));
  }

  return (
    <div className="container">
      <ul role="menu-bar">
        <li role="menu-item" tabIndex={0} aria-haspopup="true">
          File
          <ul role="menu">
            <li role="menu-item">
              <a href="#preferences">Preferences</a>
            </li>
            <li role="menu-item" className="divider">
              <a href="#menu">Another Action</a>
            </li>
            <li role="menu-item">
              <a href="#menu">Exit</a>
            </li>
          </ul>
        </li>
      </ul>
      <p className="heading center">Rubicon</p>
      <p>The Music Downloader Aim to Download Genshin Impact Doujin MMD Music In Nerd Way.</p>
      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          search();
        }}
      >
        <input
          className="search-box"
          id="search"
          onChange={(e) => setSearchKeyword(e.currentTarget.value)}
          placeholder="Enter keywords..."
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
      <p>{searchResult}</p>
    </div>
  );
}

export default App;
