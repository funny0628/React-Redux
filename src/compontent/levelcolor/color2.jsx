import React, { Component } from 'react'

import { Consumer } from './context'

export default class color2 extends Component {
    render() {
        return (
            <Consumer>
                {data => (
                    <div style={{ color: data }}>
                        颜色
              </div>
                )}
            </Consumer>

        )
    }
}
