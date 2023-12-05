import MenuBar from "../components/menubar";
import SearchBox from "../components/searchbox";

function App() {
  return (
    <div className="container">
      <MenuBar />
      <p className="heading center">Rubicon</p>
      <p className="description">very good music search engine.</p>
      <SearchBox />
    </div>
  );
}

export default App;
