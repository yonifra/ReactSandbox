import React from "react";

export default ({ taskName, taskStatus }) => (
  <div>
    <h2>{taskName}</h2>
    <h5>{taskStatus}</h5>
  </div>
);
