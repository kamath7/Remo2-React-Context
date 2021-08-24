import React from "react";
import { useTheme } from "./ThemeContext";

const FunctionalComp = () => {
  const { darkTheme, toggleTheme } = useTheme();
  const styles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    <>
      <button onClick={toggleTheme}>Toggle</button>
      <div style={styles}>Function Theme</div>
    </>
  );
};

export default FunctionalComp;
