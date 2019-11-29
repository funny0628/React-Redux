

import {ADD ,DELETE} from './actiontype'

//主要是处理数据的逻辑写在这里
export default (state=0,action)=>{
    switch (action.type) {
        case ADD:
            return state+1

        case DELETE:
            return state-1
          
        default:
          return state
    }
}