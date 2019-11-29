import React, { Component } from 'react'

import store from './store/index'
import {add1} from './store/actioncreator'
import {ADD} from './store/actiontype.js'

export default class add extends Component {
    add=()=>{
        store.dispatch(add1())
        // store.dispatch({
        //     type:ADD
        // })
      
    }
    render() {
        return (
            <div>
                <button onClick={this.add}> + </button>
            </div>
        )
    }
}
