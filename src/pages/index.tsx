import MenuBar from "../components/menubar";
import SearchBox from "../components/searchbox";

function App() {
  return (
    <div className="container">
      <MenuBar />
      <p className="heading center">Rubicon</p>
      <p className="description">The Music Downloader Aim to Download Genshin Impact Doujin MMD Music In Nerd Way.</p>
      <SearchBox />
    </div>
  );
}

export default App;
