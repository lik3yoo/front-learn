import React from "react"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className="header">
      <Link to="/user">User</Link>
      <Link to="/list">List</Link>
    </div>
  )
}
