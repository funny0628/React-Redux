import React, { Component } from 'react'

export default class mouse extends Component {
    
    state = {
        x:0,
        y:0
    }

    handleMouseMove = (e) => {
        // console.log(e)
        this.setState({
            x:e.clientX,
            y:e.clientY
        })
    }

    componentDidMount(){
        window.addEventListener('mousemove',this.handleMouseMove)
    }

    componentWillUnmount(){
        window.removeEventListener('mousemove',this.handleMouseMove)
    }

    render() {
    
        const {x,y} = this.state
    
        return (
            <div>
                <div>鼠标的当前位置是:x--{x} ; y--{y} </div>
            </div>
        )
    }
}
