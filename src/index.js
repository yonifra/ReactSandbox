import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Task from "./Task";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hello name="Yoni" />
    <Task taskName="Falcon task" taskStatus="High" />
    <h2>Start editing to see some magic stuff {"\u2728"}</h2>
  </div>
);

render(<App />, document.getElementById("root"));
