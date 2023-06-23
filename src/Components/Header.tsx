import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
const Header = () => {
  return (
    <header>
      <AppBar position="fixed" sx={{ backgroundColor: "#212121" }}>
        <Toolbar>
          <Typography> Library </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </header>
  );
};

export default Header;
