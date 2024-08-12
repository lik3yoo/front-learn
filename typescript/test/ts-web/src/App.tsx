import React from "react"
import Root from "./router"
import { Provider } from "react-redux"
import store from '@/store'

export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  )
}
