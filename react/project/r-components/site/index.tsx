import React from 'react'
import { createRoot } from "react-dom/client"
import App from "./app"

const rootDom = document.getElementById("root")
const root = createRoot(rootDom!)

root.render(<App />)
