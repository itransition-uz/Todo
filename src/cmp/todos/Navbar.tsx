import React from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import { teal } from "@mui/material/colors";

interface IProps {
  title: string;
}

function Navbar(props: IProps) {
  return (
    <Box
      sx={{
        width: `100%`,
        height: 75,
        backgroundColor: teal.A400,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        color: `white`,
      }}
    >
      <h2>
        <Badge badgeContent={4} color={"info"}>
          {props.title}
        </Badge>
      </h2>
    </Box>
  );
}

export default Navbar;
