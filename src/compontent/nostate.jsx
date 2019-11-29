import React from 'react'

//无状态的组件使用函数创建

import NNoState from'./nostate.css'

function Nostate({aa,bb}) {//对象的解构语法
    return <div className={NNoState.yangshi}>这是无状态的组件--{aa}--{bb}</div>
}
export default Nostate