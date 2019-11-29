import React, { Component } from 'react'

export default class newdetail extends Component {
    componentDidMount(){
        console.log(this.props);
        
    }
    render() {
        // 使用query传参的方式,怎么获取参数
        // 在路由跳转的情况下子组件都可以在无形中接收父组件传递的props,有三个属性location , macth ,history 三个属性
      
        // console.log(this.props.history.location.search) //?newId=1001
      
        //使用query传参的方式获取参数
        var searchParams = new URLSearchParams(this.props.location.search);//
        console.log(searchParams) // 
        console.log(searchParams.get("newId")) // 
        
        //params传递参数的过程
        // console.log(this.props.match.params.newId)
        

        return (
            <div>
                {/* query传参的方式 */}
                这是新闻详情内容{searchParams.get("newId")}
                {/* params传参方式 */}
                {/* 这是新闻详情内容{this.props.match.params.newId} */}
            </div>
        )
    }
}
