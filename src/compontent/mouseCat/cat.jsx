import React, { Component } from 'react'
import img from '../../../static/images/千禧.jpg'

export default class cat extends Component {
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
    
          let {x,y} =this.state
    
        return (
            <div>
               <img style={{width:100,height:100,position:'absolute',top:y-50,left:x-50}} src={img} alt=""/>
            </div>
        )
    }
}
