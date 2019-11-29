import React, { Component } from 'react'

export default class Life extends Component {
    constructor(){
        super()
        this.state={
            age:12
        }
        // console.log('-----------1---数据初始化数据',this.state ,'dom节点',this.refs.divRef )
    }
    
   componentWillMount(){
    // console.log('-------2--模板将会挂载',this.refs.divRef,'数据为',this.state)
   }

    render() {
        // console.log('-------3--模板渲染阶段',this.refs.divRef,'数据为',this.state)
        return (
            <div ref='divRef'>
                {this.state.age}
            </div>
        )
      
    }

    componentDidMount(){
        // console.log('-------4--数据挂载完成模板节点',this.refs.divRef,'数据为',this.state )
    }
}
