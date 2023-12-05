import { invoke } from "@tauri-apps/api";
import { useState } from "react";

export default function SearchBox() {
  const [searchResult, setSearchResult] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchSource, setSearchSource] = useState("all");

  async function search() {
    setSearchResult(await invoke("search", { searchSource, searchKeyword }));
  }

  return (
    <>
      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          search();
        }}
      >
        <select
          id="source-select"
          style={{ width: "6rem" }}
          onChange={() => {
            const selectElement = document.getElementById("source-select") as HTMLSelectElement;
            setSearchSource(selectElement.value || "all");
          }}
        >
          <option value="all">All</option>
          <option value="ytb">Youtube</option>
          <option value="netease">Netease</option>
          <option value="nw0">Network</option>
          <option value="nw1">Network1</option>
          <option value="nw2">Network2</option>
        </select>
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
    </>
  );
}
