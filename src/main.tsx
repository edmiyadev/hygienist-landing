import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HygienistLandingApp } from "./HygienistLandingApp";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HygienistLandingApp />
  </StrictMode>
);
