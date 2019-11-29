import React, { Component } from 'react'

import Color2 from './color2'

import { Provider } from './context'

export default class color1 extends Component {
    //props --cc
    render() {
        return (
            <Provider value={this.props.cc}>
                <div style={{color:this.props.cc}}>
                    color <br />
                    <Color2 />
                </div>
            </Provider>

        )
    }
}
