import React, { Component } from 'react'
import Goodslist from './goodslist'
import Cart from './cart'

export default class index extends Component {
    render() {
        return (
            <div>
                这是主组件
                {/* <Goodslist/><br/><br/> */}
                <Cart/><br/>
            </div>
        )
    }
}
