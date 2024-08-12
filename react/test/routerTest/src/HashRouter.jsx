import { useState } from 'react'
import { Route, Routes, HashRouter, Link, Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />}>
            </Route>
            <Route path="about" element={<About />}>
            </Route>
          </Route>
        </Routes>
      </HashRouter>
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
