import React, { Component } from 'react'
import styles from './layout.module.css'

import {Link,Route,Switch,Redirect} from 'react-router-dom'


class User extends React.Component{
    render(){
        return <div>我是用户中心页面</div>
    }
}

export default class layout extends Component {
    render() {
        return (
            <div className={styles.box}>
                <div className={styles.left}>
                    <ul>
                        <li> <Link to='/layout/user'>用户中心 </Link></li>
                        <li> <Link to='/layout/right'>权限管理 </Link></li>
                    </ul>
                </div>
                <div className={styles.right}>
                <Switch>
                        <Route path="/layout/user" component={User}/>
                        <Route path="/layout/right" render = {() => { return <div>权限管理组件</div> }}/>

                        <Redirect exact from="/layout" to="/layout/user"/>
                    </Switch>
                </div>
            </div>
        )
    }
}
