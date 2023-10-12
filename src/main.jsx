import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { LanguageProvider } from "./context/LanguageContext";
import "./index.css";
import { ApiProvider } from "./context/ApiContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ApiProvider>
  </React.StrictMode>
);
