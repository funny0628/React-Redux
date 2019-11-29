import React, { Component } from 'react';

import styles from './index.module.css' // style-loader & css-loader

import { HashRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'



// 导入子组件
import GoodsList from './goodsList'
import Cart from './cart'
//导入仓库
import { store } from './store/index'


class Index extends Component {
    state = {
        count: 0,
        
    }
    componentDidMount() {//页面最早渲染的钩子

         // console.log(store.getState())
         let totalcount = 0;
         store.getState().forEach(item => {
             totalcount += item.num
         });
         this.setState({
             count : totalcount
         })

        //监控仓库中的数据的变化,变就触发
        store.subscribe(() => {
            // console.log(store.getState())
            let totalcount = 0;
            store.getState().forEach(item => {
                totalcount += item.num
            });
            this.setState({
                count : totalcount
            })
           
        })

          // 监听页面关闭事件
          window.onbeforeunload = () => {
            localStorage.setItem('SHOPCART',JSON.stringify(store.getState()))
        }

    }


    render() {
        let { count } = this.state
        return (
            <Router>
                <div>
                    <h2 className={styles.title}>黑马买买买-商城
                        <p>
                            <Link to="/goodslist">商品列表</Link>&nbsp;&nbsp;
                            <Link to="/cart">购物车 {count > 0 && <span>({count})</span>} </Link>
                        </p>
                    </h2>
                    <div className={styles.indexContainer}>
                        <Switch>
                            <Route path="/goodslist" component={GoodsList} />
                            <Route path="/cart" component={Cart} />
                            <Redirect exact from="/" to="/goodslist" />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Index;