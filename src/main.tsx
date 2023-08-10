import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./style/global.ts";
import { UserContextProvider } from "./providers/userContext/userContext.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <App />
      </UserContextProvider>
      <GlobalStyles />
    </BrowserRouter>
  </React.StrictMode>
);
