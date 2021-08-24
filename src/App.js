import React  from "react";
import FunctionalComp from "./FunctionalComp";
import { ThemeProvider } from "./ThemeContext";
function App() {

  return (
    <>
      <ThemeProvider >
        <FunctionalComp />
      </ThemeProvider>
    </>
  );
}

export default App;
