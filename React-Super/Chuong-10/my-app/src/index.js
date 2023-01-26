import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
// react render nhung thu can thiet
const root = ReactDOM.createRoot(document.getElementById("root"));
// function ticket() {
//   const element = (
//     <div>
//       <h1>Hello</h1>
//       {new Date().toLocaleTimeString()}
//     </div>
//   );
//   root.render(element);
// }
// setInterval(ticket, 1000);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
