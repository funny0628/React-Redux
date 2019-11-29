import React, { Component } from 'react'

export default class Controlled extends Component {
    //受控层类似于vue的双向数据绑定,同样的也是作用于表单元素
    state={
        username : '',
        userpassword : ''
    }
    //注册事件,监听 value的值
    inputvalue=(e)=>{
        console.log('受控组件内容',e.target)
        this.setState({
          [e.target.name] : e.target.value
        })
        
    }
    render() {
        return (
            <div>
                用户名 : <input name='username' onChange={this.inputvalue} value={this.state.username} type="text"/> <br/>
                密码 : <input name='userpassword' onChange={this.inputvalue} value={this.state.userpassword} type="password"/>
            </div>
        )
    }
}
// 实现数据双向绑定的过程, 
// 1. 表单元素绑定我们的数据层 , 这样可以达到数据数据驱动视图
// 2. 在通过表单元素的onChange 事件 监听表单元素的变化, 获取表单元素的内容,再赋值给我们的数据层,从而达到双向绑定