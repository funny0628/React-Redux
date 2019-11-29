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