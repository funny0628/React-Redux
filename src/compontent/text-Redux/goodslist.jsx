import React, { Component } from 'react'

// import { store } from './store/index'
import { addgoods } from './store/actioncreator'

import {connect} from 'react-redux'

 class goodslist extends Component {
    // state = {
    //     msg: 0,
    //     v: 3
    // }

    // componentDidMount(){
    //     this.setState({
    //         msg:store.getState()
    //     })
    //     //仓库的值放生变化的时候,触发
    //     store.subscribe(()=>{
    //         this.setState({
    //             msg:store.getState()
    //         })
    //     })

    // }
    // add = (num) => {//点击之后触发了检测数据的action

    //     store.dispatch(addgoods(num))
    // }
    render() {
        let {  msg } = this.props
        return (
            <div>
                <div>我是商品列表页面</div>
                <div>商品的数量为:{msg}</div>
                <button>向仓库中添加数据</button>
                {/* <button onClick={() => this.add(v)}>向仓库中添加数据</button> */}
            </div>
        )
    }
}

const mapStatetoprops = state => {

   
    return {
        msg:state
     
    }
}

export default connect(mapStatetoprops,null)(goodslist)