import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";

function Index() {
  return (
    <>
      <CssBaseline />
      <App />
    </>
  );
}

createRoot(document.getElementById("todo") as HTMLElement).render(<Index />);
