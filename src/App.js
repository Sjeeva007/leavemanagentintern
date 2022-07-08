import "./App.css";
import FrontForm from "./Components/FrontForm";
function App() {
  return (
    <div className="App">
      <div className="leftSide">
        <h1 className="title">Leave Management</h1>
      </div>
      <div className="rightSide">
        <FrontForm />
      </div>
    </div>
  );
}

export default App;
