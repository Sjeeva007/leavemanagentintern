import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Logreg from "./Logreg";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Logreg />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
