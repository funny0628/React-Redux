import React from "react"

//导入bus
import bus from './bus'

class Brother1 extends React.Component{
    constructor(){
        super()
        this.state={
            name:'小白'
        }
    }
    sendtobrother2(){
        console.log('----------');
        
        bus.emit('mysend','传递过来的参数')
    }
    render(){
        return <>
        <div>我是兄弟组件1</div>
        <button onClick={this.sendtobrother2}>点击向兄弟2组件传递参数</button>
        </>
    }
}
export default Brother1