import {ADD,UPDATE,DELETE} from './actiontype'

export const addgoods = goods=>{
    
    return {
        type:ADD,
        goods
    }
}

export const updatagoods = goods=>{
    
    return {
        type:UPDATE,
        goods
    }
}

export const deletegoods = id=>{
    
    return {
        type:DELETE,
        id
    }
}
export const asyncdeletegoods = id=>{
    setTimeout(function() {
        return {
            type:DELETE,
            id
        }
    }, 2000);

}