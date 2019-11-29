import React from "react"

import bus from './bus'

class Brother2 extends React.Component{

    componentWillMount(){//react的生命周期函数
        bus.on('mysend',data=>{
            console.log(this)
            // console.log(data)
            this.setState({
                canshu:data
            })
        })
    }
    state={
       canshu:"" 
    }
    render(){
        return <>
        <div>我是兄弟组件2 : 拿到兄弟1传递过来的参数 ---: {this.state.canshu}</div>
        </>
    }
}
export default Brother2