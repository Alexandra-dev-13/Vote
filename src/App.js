import Home from "./components/Home";
import Connexion from "./components/Connexion";
import Inscription from "./components/Inscription"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Connexion" element={<Connexion />} />
          <Route path="/Inscription" element={<Inscription />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
