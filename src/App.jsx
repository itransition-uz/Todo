import React from "react";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function App(props) {
  return (
    <>
      <Button variant="contained">Hello World</Button>
      <Checkbox {...label} defaultChecked />
      <h1>Itransition Webpack!</h1>
    </>
  );
}

export default App;
