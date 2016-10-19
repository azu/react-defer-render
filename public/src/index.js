// LICENSE : MIT
"use strict";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// entry point
const now = window.performance.now();
ReactDOM.render(<App />, document.getElementById("js-app"));
console.log(`Finish first render: ${window.performance.now() - now}ms`);