import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChatProvider } from "./context/chatContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChatProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChatProvider>
);
