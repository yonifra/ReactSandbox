import React from "react";
import { render } from "react-dom";
import Calculator from "./Calculator";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <h2>Simple Calculator in React.js</h2>

    <Calculator />
  </div>
);

render(<App />, document.getElementById("root"));
