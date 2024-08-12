import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App(props) {
  props.onGlobalStateChange = (state, prev) => {
    console.log(state, prev)
  }
  return (
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/sub-react' : '/'}>
      <div className="app">
        <Routes>
          <Route index element={<div>home</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
