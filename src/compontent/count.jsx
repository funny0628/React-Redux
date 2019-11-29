import React from 'react'

class Count extends React.Component{
    //接收父传过来的参数
    state = {
        Count : this.props.initCount
    }
    
    addCount=()=>{
        // console.log(this)
    //    this.setState({//异步的操作 ,所以下面的回调给父组件的参数是一直hi晚一步的
    //        Count:this.state.Count +1
    //    })
    //    this.props.callback(this.state.Count)
    this.setState({//写在setState的完后才能之后的回调函数中
        Count:this.state.Count +1
    },()=>{
        this.props.callback(this.state.Count)
    })
   
    }

    render(){
        return <>
            {/* 父组件传递过来的额props 的值是只读的不可以修改 */}
            {/* <div>子组件props的初始值:--{this.props.initCount} <button onClick={this.addCount}>++</button> </div> */}
            <div>子组件state的初始值:--{this.state.Count} <button onClick={this.addCount}>++</button> </div>
        </>
    }
}
export default Count