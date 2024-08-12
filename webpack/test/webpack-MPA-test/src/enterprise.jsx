import React from "react"
import ReactDOM from "react-dom"
import RouterEnterprise from "@/router/RouterEnterprise"
import { createRoot } from "react-dom/client"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<RouterEnterprise type="enterprise" />)
