import React, { Component } from 'react'
// import {HashRouter as Router,Link,Route,Switch,Redirect} from 'react-router-dom'
import {BrowerRouter as Router,Link,Route,Switch,Redirect} from 'react-router-dom'

//导入模块化的css文件
import styles from "./index.module.css"

export default class Login extends Component {
    state={
        username:"",
        password:""
    }

    change=e=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    login=()=>{
        let {username,password} = this.state
       if(username === 'admin' && password === '123'){
           //编程式导航
           console.log('登录成功了')
           this.props.history.push('/layout')
       }else {
           alert('密码或账号错误')
       }
    }
    render() {
        let {username,password} =this.state
        return (
            <div className={styles.conten}>
               用户名: <input value={username} name="username" onChange={this.change} type="text"/><br/>
               密码: <input value={password} name="password" onChange={this.change} type="password"/><br/>
               <button onClick={this.login}>登录</button>
            </div>
        )
    }
}
