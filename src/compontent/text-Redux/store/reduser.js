import {ADD_GOODS,UPDATA_GOODS,DELETE_GOODS} from './actiontype'

export default (state=2,action)=>{
    switch (action.type) {
        case ADD_GOODS:
          
            let oldadd = JSON.parse(JSON.stringify(state))
           
            oldadd = oldadd + action.num
            return oldadd
            
        case UPDATA_GOODS:
          
            let oldupdata = JSON.parse(JSON.stringify(state))
           
            oldupdata = oldupdata * action.v
            return oldupdata
            
        case DELETE_GOODS:
          
           
            return 0;
            
           
    
        default:
           return state
    }
}