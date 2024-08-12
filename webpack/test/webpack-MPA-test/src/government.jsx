import React from "react"
import RouterGovernment from "@/router/RouterGovernment"
import { createRoot } from "react-dom/client"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<RouterGovernment type="government" />)
