import React, { Component } from 'react'

export default class TT extends Component {
   componentWillMount(){
    console.log(this);
   }
    
    render() {
        return (
            <div>
                这是一个测试的组件
            </div>
        )
    }
}
