import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '@/components'
import { Flex } from '@/pages'
import './App.scss'

function App() {

  return <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="flex" element={<Flex />} />
      </Route>
    </Routes>
  </HashRouter>
}

export default App
