import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class newlist extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>新闻页面将展示的内容</li>
                    {/* 使用query传参,可以传递多个参数 */}
                    <li><Link to='/newdetail?newId=1001'>我是query传参的方式跳转</Link></li>
                    <li>新闻页面将展示的内容</li>
                    {/* params传参方式 */}
                    {/* <li><Link to="/newdetail/1003">我是params传参方式</Link></li> */}
                </ul>
            </div>
        )
    }
}
