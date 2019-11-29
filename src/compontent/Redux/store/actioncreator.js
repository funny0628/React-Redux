import {ADD , DELETE} from './actiontype'
import store from './index'


export const add1 =()=>{
    return {
        type:ADD
    }
}
export const asyncdeletegoods = ()=>{
    setTimeout(function() {
        store.dispatch({
            type:DELETE,
        })
    }, 2000);

}