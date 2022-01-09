import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { AuthContextProvider } from "./contexts/Auth";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <AuthContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </AuthContextProvider>,
  rootElement
);
