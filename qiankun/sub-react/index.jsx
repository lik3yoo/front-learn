import React from 'react'
import { createRoot, } from 'react-dom/client'
import App from './src/App.jsx'
import { unmountComponentAtNode, render } from 'react-dom'

const _render = (props) => {
  const { container } = props
  const dom = document.querySelector('#root')
  const root = createRoot(container ? container.querySelector('#root') : dom)
  root.render(<App {...props} />)
}

if (!window.__POWERED_BY_QIANKUN__) {
  _render({});
}

export async function bootstrap() {
  console.log('react app bootstraped');
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  _render(props)
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {
  unmountComponentAtNode(
    props.container ? props.container.querySelector('#root') : document.getElementById('root'),
  );
}