import React, { Component } from 'react'

import {Table,InputNumber,Button,Modal} from 'antd'
const {confirm} = Modal
import {store} from './store/index'
import {updatagoods,deletegoods} from './store/actioncreator'

export default class Cart extends Component {
    state={
        goodsList:[],
        totalprice:0

    }
    //页面一进来就获取仓库中的数据赋值给我们表格需要展示的数据
    componentDidMount(){
        // 页面一进来就获取仓库中的数据赋值给我们表格需要展示的数据
        this.getdata()

        //监听仓库重地额数据发生变再重新的获取仓库的数据
        store.subscribe(()=>{
            this.getdata()
        })
       
    }

    getdata(){
          //获取仓库中的数据
          const list = store.getState()
          console.log(list)
          //给自己的每一条数组添加一个key 的属性
          //计算总的商品的价格
          let totalprice =0
          list.forEach(item=>{
              item.key = item.id
              totalprice += item.num * item.price
          })
  
          //赋值给自己的state
          this.setState({
              goodslist:list,
              totalprice
          })
    }

    //点击修改商品的数量
    onChange(id,num){
      
        //触发修改商品数量的action
        store.dispatch(updatagoods({id,num}))
        
    }

    delete=id=>{
        confirm({
            title: '提示',
            content: '确定删除该记录吗?',
            okText: '是',
            okType: 'danger',
            cancelText: '否',
            onOk() {
              console.log('OK');
              // 去删除仓库中的数据
              store.dispatch(deletegoods(id))
            },
            onCancel() {
              console.log('Cancel');
            },
          });
        // console.log('删除',id)
       
    }
    
      columns = [
        {
            title: '名字',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: '图片',
            dataIndex: 'url',
            key: 'url',
            render:url => {
                return <img style={{width:100,height:100}} src={url} />
            }
        },
        {
            title: '数量',
            key: 'num',
            render: ({id,num}) => {
                return <InputNumber min={1} defaultValue={num} onChange={(value) => this.onChange(id,value)} />
            }
        },
        {
            title: '单价',
            dataIndex: 'price',
            key: 'price'
        },
        {
            title: '总价',
            key: 'name1',
            render: ({num,price}) => {
                return <span>{num * price}</span>
            }
        },
        {
            title: '操作',
            key: 'name2',
            render:({id}) => {
                  
                return <Button type="danger" onClick={()=>this.delete(id)}>删 除</Button>
            }
        }
    ]

    
    

    render() {

     let {goodslist,totalprice} = this.state
        return (
           
                <div>
                    {/* 表格 */}
                    {/* <Table columns={this.columns} dataSource={goodsList} pagination={false}/> */}
                    <Table dataSource={goodslist} columns={this.columns} pagination={false} />
                    {/* 总价 */}
                    <p>总价：{totalprice}</p>
                    {/* <Button type="primary" style={{color:'white',backgroundColor:'#67c23a'}}>去结算</Button> */}
                </div>
         
        )
    }
}
