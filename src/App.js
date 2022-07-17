// import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Logreg from "./Logreg";

function App() {
  return (
    <Routes>
      <Route path="/logreg" element={<Logreg />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
