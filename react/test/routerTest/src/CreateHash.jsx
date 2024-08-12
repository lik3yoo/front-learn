import { useState } from 'react'
import {
  Route, Routes, HashRouter, Link, Outlet,
  createHashRouter,
  RouterProvider,
} from 'react-router-dom'

function App() {

  const router = createHashRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: 'home',
          element: <Home />,
        },
        {
          path: 'about',
          element: <About />,
        },
      ],
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div >
  )
}

function Layout() {
  return (
    <div>
      <h1>Layout</h1>
      <nav>
        <Link to="/home" target="_blank">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <div style={{ border: "1px solid red" }}>
        <Outlet />
      </div>
    </div>
  )
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

export default App
