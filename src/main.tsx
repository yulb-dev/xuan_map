import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
(window as any)._AMapSecurityConfig = {
  securityJsCode: "899f74b5922faabc9c3b33d240f83de7",
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
