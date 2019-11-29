import React, { Component } from 'react'

export default class IF extends Component {
    //条件判断的显示
    state={
        age:12
    }

    //1.直接使用if 判断
    // changeage=()=>{
    //     if(this.state.age > 18){
    //         this.setState({
    //             age:17
    //         })
    //     }else {
    //         this.setState({
    //             age:19
    //         })
    //     }
    // }

      //2.使用三木运算符,将返回的dom结构封装到函数内部
    //   moreage=()=>{
    //       return <div> 你的年龄满足,,可以玩游戏了 </div>
    //   }
    //   lessage=()=>{
    //       return <div> 你的年龄不满足 , 好好学习吧 </div>
    //   }

        //3.当&&前面的情况满足的时候 , 后面的代码才会执行
        truechange=()=>{
            return <div> 此时的你一定大于11岁了 </div>
        }

    render() {
        const {age} = this.state

                //1.直接使用if 判断
                // if(age>18){
                //     return <div onClick={this.changeage}>你可以玩游戏了</div>
                // }else {
                //     return <div onClick={this.changeage}> 你的年龄不到,好好学习吧 </div>
                // }
            
                //2.使用三木运算符,将返回的dom结构封装到函数内部
                // return  <> 
                //             { age > 18? this.moreage() : this.lessage()} 
                //         </>

                //3.使用&& ,当满足一种情况的时候,就会执行后面的代码
               return <> {age > 11 && this.truechange()} </>
    }
}
