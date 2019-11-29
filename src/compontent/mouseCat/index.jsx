import React, { Component } from 'react'

import Mouse from './mouse'
import Cat from './cat'

export default class index extends Component {
    render() {
        return (
            <div>
                这是主组件
                <Mouse/>
                <Cat/>
            </div>
        )
    }
}
