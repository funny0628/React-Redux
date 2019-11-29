import React, { Component } from 'react'
import store from './store/index'

import {asyncdeletegoods} from './store/actioncreator'
import {DELETE} from './store/actiontype.js'

export default class minus extends Component {
    minus=()=>{
        // store.dispatch({
        //     type:"minus"
        // })
        store.dispatch(asyncdeletegoods())
    }
    render() {
        return (
            <div>
                <button onClick={this.minus}> - </button>
            </div>
        )
    }
}
