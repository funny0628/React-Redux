import React, { Component } from 'react'

import {updatagoods,deleteagoods} from './store/actioncreator'
import {store} from './store/index'

export default class cart extends Component {
    state={
        msg:100
    }

    updata=(num)=>{
       
        store.dispatch(updatagoods(num))
    }
    delete=()=>{
        console.log('修改了')
        store.dispatch(deleteagoods())
    }
    render() {
        let {msg} =this.state
        return (
            <div>
                <div>我是购物车页面</div>
                <button onClick={()=>this.updata(msg)}>点击修改仓库中的数据</button>
                <button onClick={()=>this.delete()}>删除仓库中的数据</button>
            </div>
        )
    }
}
