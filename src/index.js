//导包
import React from 'react'
import ReactDOM from 'react-dom'

// 导入根组件
import App from './App'

//导入提供者 与仓库
import { Provider } from 'react-redux'
import { store } from './compontent/react-redux-cart/store/index'

//渲染根组件
ReactDOM.render(<Provider store={store} ><App/></Provider>,document.getElementById('root'))
