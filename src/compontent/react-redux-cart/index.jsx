import React, { Component } from 'react';

import styles from './index.module.css' // style-loader & css-loader

import { HashRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'

//使用react-redux配置简历组家与仓库的关系
import { connect } from 'react-redux'


// 导入子组件
import GoodsList from './goodsList'
import Cart from './cart'
//导入仓库
// import { store } from './store/index'


class Index extends Component {
   
    componentDidMount() {//页面最早渲染的钩子

          // 监听页面关闭事件
          window.onbeforeunload = () => {
            localStorage.setItem('SHOPCART',JSON.stringify(this.props.goodslist))
        }

    }


    render() {
        let { count } = this.props
        return (
            <Router>
                <div>
                    <h2 className={styles.title}>商城
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

//分离到render之外
const mapStateToProps = (state) => {//把仓库的数据映射到组件的props中

  function getcount(){
    let totalcount = 0;
    state.forEach(item => {
        totalcount += item.num
      
    });
    return totalcount
  }
   
    return {
      count: getcount(),
      goodslist:state
    }
  }
  


export default connect(mapStateToProps,null)(Index);