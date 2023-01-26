import { useState } from "react";
import "./App.css";
import Clock from "./Clock";

function App() {
  const [hide, setHide] = useState(true);
  const handleClickHide = () => {
    setHide(!hide);
  };
  return (
    <div className="App">
      <button onClick={handleClickHide}>Click hide component Clock</button>
      {hide && <Clock />}
    </div>
  );
}

export default App;
