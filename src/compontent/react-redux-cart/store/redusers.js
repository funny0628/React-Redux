import { ADD,UPDATE,DELETE } from './actiontype'


const goodsList = JSON.parse(localStorage.getItem('SHOPCART') || '[]')
export default (state = goodsList, action) => {

    switch (action.type) {
        case ADD:
            //先获取原始的数据
            let ADDLIST = JSON.parse(JSON.stringify(state))

            
          const oldaddgoods =ADDLIST.find(item => item.id===action.goods.id)
            if (oldaddgoods) {
                oldaddgoods.num +=1
            } else {
                ADDLIST.push(action.goods)
            }
            return ADDLIST;

        case UPDATE:
            //先获取原始的数据
            let UPDATELIST = JSON.parse(JSON.stringify(state))

            
          const oldupdategoods =UPDATELIST.find(item => item.id===action.goods.id)
          oldupdategoods.num = action.goods.num
            return UPDATELIST;

        case DELETE:
            //先获取原始的数据
            let DELETELIST = JSON.parse(JSON.stringify(state))

            
          const currentindex =DELETELIST.findIndex(item => item.id===action.id)
          DELETELIST.splice(currentindex, 1)
            return DELETELIST;


        default:
            return state;
    }

}