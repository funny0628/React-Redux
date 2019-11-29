import React, { Component } from 'react'

import Add from './add'
import Minus from './minus'

import store from './store/index'


export default class index extends Component {
    
    constructor(){
        super()

        this.state = {
            count:store.getState()//获取store中的值
        }
    }

    componentDidMount(){
        store.subscribe(()=>{ //订阅 , 监控store的全局变化
            this.setState({
                count:store.getState()
            })
        })
      
    }

    render() {
     
        return (
            <div>
                count is {this.state.count}<br /><br /><br />
                <div style={{display:"flex"}}><Minus /> &nbsp;&nbsp;&nbsp;<Add /></div>
            </div>
        )
    }
}
