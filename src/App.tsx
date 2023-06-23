import React, { FC } from "react";
import { CssBaseline } from "@mui/material";
import Header from "./Components/Header";
import Main from "./Components/Main";

const App: FC = () => {
  //FC = function component type
  //using usestate hook for handle user input in the handleChange function
  return (
    <>
      <CssBaseline></CssBaseline>
      <Header />
      <Main />
    </>
  );
};

export default App;
