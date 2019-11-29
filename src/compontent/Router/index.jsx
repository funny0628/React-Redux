import React, { Component } from 'react'
//导入路由的核心的包
// import { HashRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'

//到入住子组件
import Goodslist from './goodslist'
import Newlist from './newlist'

//新闻详情页面
import Newdetail from './newdetail'

//导入找不到的404页面
import NoFound from './nofound'

export default class index extends Component {
    render() {
        return (
            <Router>
                <div>

                    <Link to='/goodslist'>商品类表</Link>
                    <Link to='/newlist'>新闻列表</Link>
                    <hr />
                    <br />

                    <Switch>
                        {/* 直接在根目录下配置访问goodslist, 默认会有bug ,可以设置exact 来解决 */}
                        {/* <Route exact path='/' component={Goodslist} /> */}
                        <Route path='/goodslist' component={Goodslist} />
                        <Route path='/newlist' component={Newlist} />

                        {/* query传递参数的方式 */}
                        <Route path='/newdetail' component={Newdetail} />

                        {/* params传参方式 */}
                        {/* <Route path='/newdetail/:newId' component={Newdetail} /> */}

                        {/* 重定向必须写在路由规则配置的最后,但是此时也是模糊匹配的,在随便输入的信息中也是可以跳转到重定向的页面,可以加上exact精确匹配 */}
                        <Redirect exact from='/' to='/goodslist'/>
                        {/* 所有的找不到的404页面, */}
                        <Route component={NoFound}/>
                    </Switch>

                </div>
            </Router>
        )
    }
}
