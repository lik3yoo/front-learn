import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import menus from './menus'
import './index.scss'

export default function Layout() {
  return (
    <div className="layout">
      <div className="menu">
        {
          menus.map(menu => (
            <Link key={menu.path} to={menu.path}>{menu.text}</Link>
          ))
        }
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}
