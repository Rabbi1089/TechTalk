import "./App.css";
import Blog from "./pages/Blog";
import Bookmarks from "./pages/Bookmarks";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Home />
      <div className="center"></div>
      <Blog />
      <Bookmarks />
    </>
  );
}

export default App;
