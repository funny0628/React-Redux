import React, { Component } from "react";

//导入antd的按钮
import { Button } from 'antd';

//导入仓库
import {store} from './store/index'
//导入添加的action
import {addgoods} from './store/actioncreator'


class GoodsList extends Component {
  state = {
    fruitList: [
      {
        id: 10001,
        num: 1,
        url:
          "http://img1.imgtn.bdimg.com/it/u=315543396,3137659771&fm=26&gp=0.jpg",
        name: "樱桃",
        price: 5
      },
      {
        id: 10002,
        num: 1,
        url:
          "http://img2.imgtn.bdimg.com/it/u=2772031930,61765822&fm=11&gp=0.jpg",
        name: "橙子",
        price: 2.5
      },
      {
        id: 10003,
        num: 1,
        url:
          "http://img4.imgtn.bdimg.com/it/u=2559790982,4257351462&fm=26&gp=0.jpg",
        name: "西瓜",
        price: 20
      },
      {
        id: 10004,
        num: 1,
        url:
          "http://img5.imgtn.bdimg.com/it/u=2145955082,2841584887&fm=26&gp=0.jpg",
        name: "芒果",
        price: 35
      }
    ]
  };

  //点击添加购物车的新增事件-将整个数据都添加到仓库中
  add= item =>{
    // console.log(item)
    //触发仓库的action事件
    store.dispatch(addgoods(item))
  }

  render() {
    return <div>
        <ul>
           {
               this.state.fruitList.map(item => {
                   return <li key={item.id}>
                       <img src={item.url} alt=""/>
                       <p>{item.name}</p>
                       <p>{item.price}</p>
                       <Button type="primary" style={{color:"red"}} onClick={()=>this.add(item)}>添加购物车</Button>
                   </li>
               })
           }
        </ul>
    </div>;
  }
}

export default GoodsList;
