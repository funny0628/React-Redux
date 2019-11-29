import {ADD_GOODS,UPDATA_GOODS,DELETE_GOODS} from './actiontype'

export const addgoods = (num)=>{
    return {
        type:ADD_GOODS,
        num
    }
}

export const updatagoods = (v)=>{
    return {
        type:UPDATA_GOODS,
        v
    }
}

export const deleteagoods = ()=>{
    return {
        type:DELETE_GOODS,
        
    }
}