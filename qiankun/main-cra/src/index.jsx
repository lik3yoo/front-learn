import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { registerMicroApps, start } from "qiankun";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

registerMicroApps([
  {
    name: "sub-react", // app name registered
    entry: "//localhost:8000",
    container: "#appContainer",
    activeRule: "/sub-react",
  },
  // {
  //   name: 'sub-v2',
  //   entry: '//localhost:8080',
  //   container: '#appContainer',
  //   activeRule: '/sub-v2',
  // },
]);

start();
