import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { TaskProvider } from "./context/TaskContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-cwyft3mu4ztummy1.us.auth0.com"
      clientId="SmJQvPWOTgbQyFrhhmMHG2LKbiIlZ7Qc"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <TaskProvider>
        <App />
      </TaskProvider>
    </Auth0Provider>
  </React.StrictMode>,
);
