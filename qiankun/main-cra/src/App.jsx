import './App.scss'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { initGlobalState } from 'qiankun'
import { useState } from 'react';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="*" element={<div>not found</div>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Layout() {
  const [gState, setGState] = useState({b:1})
  const actions = initGlobalState(gState)
  const changeGlobalState = () => {
    actions.setGlobalState({ a: 1 })
  }
  return (<>
    <header>
      <Link to="/sub-react">
        sub-react
      </Link>
      <Link to="sub-v2">sub-v2</Link>
      <Link to="v3-vite">sub-v3-vite</Link>
    </header>
    <span onClick={changeGlobalState}> click to change global state</span>
    <main id="appContainer">
    </main>
  </>
  )
}

export default App;
