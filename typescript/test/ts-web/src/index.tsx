import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"

let dom = document.getElementById("app")

const root = createRoot(dom as Element)
root.render(<App />)
