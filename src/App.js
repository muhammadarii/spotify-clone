import "./input.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllPopularArtist from "./pages/AllPopularArtist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artist" element={<AllPopularArtist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
