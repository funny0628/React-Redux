import React, { Component } from 'react'

export default class UnControlled extends Component {

    //在构造器中创建一个ref
    constructor(){
        super()
        this.inputRef = React.createRef()
    }
    //在声明周期的钩子中获取dom元素
    componentDidMount(){
        //旧的写法
        // this.refs.inputRef.focus();

        //新的写法
        this.inputRef.current.focus();
        console.log(this.inputRef.current) //{current: input}
    }
    render() {
        return (
            <div>
                {/* 旧的写法 */}
                {/* <input type='text' ref='inputRef'/> */}
                <input type='text' ref={this.inputRef} />

            </div>
        )
    }
}
