import "./input.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllPopularArtist from "./pages/AllPopularArtist";
import AllPopularAlbums from "./pages/AllPopularAlbums";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artist" element={<AllPopularArtist />} />
        <Route path="/Albums" element={<AllPopularAlbums />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
