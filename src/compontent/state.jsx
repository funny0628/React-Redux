import React from 'react'

//导入样式文件
import SState from'./state.css'

class State extends React.Component{
    aa='小明'
    // constructor(){
    //     super()
    //     this.state={
    //         name:'小白',
    //         age:12
    //     }
    // }
    state = {
        name:'小白',
        age:12
    }
    
    // 父组件传递过来的props 可以直接在模板中使用,也可以作为构造器的参数获得

    render(){
        return <>
        <div className={SState.yangshi}>这是有状态的组件props:{this.props.aa}--{this.props.bb}--{this.aa}--name:{this.state.name}--age:{this.state.age} </div>
       
        </>
    }
}
export default State