import Roasters from "./views/Roasters";
import { fetchRoasters } from "./views/RoastersApi";
import ReactDOM from "react-dom/client";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Roasters fetchRoasters={fetchRoasters} />
  </React.StrictMode>,
);
