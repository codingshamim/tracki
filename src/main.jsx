import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="mycontainer py-4">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </div>
);
