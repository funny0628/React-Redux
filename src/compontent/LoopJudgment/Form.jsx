import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        username:'admin',
        password:'123'
    }

    changeUserName = e => {
        // console.log(e.target.value)
        this.setState({
            username:e.target.value
        })
    }

    changePassword = e => {
        
        this.setState({
            password:e.target.value
        })
    }

    change = e => {
        console.log(e.target.name)
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    login = () => {
        console.log(this.state)
    }

    render() {
        const {username,password} = this.state

        return (
            <div>
                <div action="">
                    {/* 用户名：<input value={username} onChange={this.changeUserName} type="text"/><br/>
                    密码：<input value={password} onChange={this.changePassword} type="password"/><br/> */}

                    {/* 下面的写法中，唯一要注意的是 input 中name 名字 要和state中模型的名字一样 */}
                    用户名：<input value={username} name="username" onChange={this.change} type="text"/><br/>
                    密码：<input value={password} name="password" onChange={this.change} type="password"/><br/>

                    <button onClick={this.login}>登录</button>
                </div>
            </div>
        )
    }
}
