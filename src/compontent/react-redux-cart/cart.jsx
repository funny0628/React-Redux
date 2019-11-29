import React, { Component } from 'react'

import {Table,InputNumber,Button,Modal} from 'antd'
const {confirm} = Modal
// import {store} from './store/index'
import {updatagoods,deletegoods} from './store/actioncreator'

//将组建与仓库简历联系
import {connect} from 'react-redux'

class Cart extends Component {
 
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
                return <InputNumber min={1} defaultValue={num} onChange={(value) => this.props.updata({id,num:value})} />
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
                  
                return <Button type="danger" onClick={()=>this.props.delete(id)}>删 除</Button>
            }
        }
    ]

    render() {
     let {goodslist,totalprice} = this.props
        return (          
                <div>
                    {/* 表格 */}
                    <Table dataSource={goodslist} columns={this.columns} pagination={false} />
                    {/* 总价 */}
                    <p>总价：{totalprice}</p>
                    <Button type="primary" style={{color:'white',backgroundColor:'#67c23a'}}>去结算</Button>
                </div>         
        )
    }
}

const mapStatetoprops= state =>{

   function gettotalprice(){
        let totalprice =0
        state.forEach(item=>{
            item.key = item.id
            totalprice += item.num * item.price
        })
        return totalprice
    }

    return {
        goodslist:state,
        totalprice:gettotalprice()
    }
}

const mapdispatchtoprops = dispatch=>{

    return {
        updata:function({id,num}){
            dispatch(updatagoods({id,num}))
        },

        delete:function(id){
        
            confirm({
                title: '提示',
                content: '确定删除该记录吗?',
                okText: '是',
                okType: 'danger',
                cancelText: '否',
                onOk() {
                console.log('OK');
                // 去删除仓库中的数据
                dispatch(deletegoods(id))
                },
                onCancel() {
                console.log('Cancel');
                },
            });     
           
        }
    }
}

export default connect(mapStatetoprops,mapdispatchtoprops)(Cart)