import { useState } from "react";
import "./App.css";
import Clock from "./Clock";
import LoginControl from "./LoginControl";
import CoreState from "./CoreState";
import ProductList from "./Products/ProductList";
import Form from "./Form";

function App() {
  const [hide, setHide] = useState(true);
  const handleClickHide = () => {
    setHide(!hide);
  };
  return (
    <div className="App">
      {/* <LoginControl hidden={true} />
      <CoreState />
      <ProductList /> */}
      {/* <button onClick={handleClickHide}>Click hide component Clock</button>
      {hide && <Clock />} */}
      <Form />
    </div>
  );
}

export default App;
