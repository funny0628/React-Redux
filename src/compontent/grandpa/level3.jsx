import React, { Component } from 'react'

import {Consumer} from './context'

export default class level3 extends Component {
    render() {
        return (
            <Consumer>
                {data => (<div>
                    这是一个3级组件:---{data}
                </div>)}
            </Consumer>

        )
    }
}
