import React, { Component } from 'react'

import Level2 from './level2'
import {Provider} from './context'

export default class level1 extends Component {
    state={
        msg:'一级组件的参数'
    }
    render() {
        return (
            <Provider value={this.state.msg}>
                <div>
                    这是一个一级组件<br />
                    <Level2 />
                </div>
            </Provider>

        )
    }
}
