import React, { Component } from 'react'

import Level3 from './level3'

export default class level2 extends Component {
    render() {
        return (
            <div>
                这是一个2级组件<br/>
                <Level3/>
            </div>
        )
    }
}
