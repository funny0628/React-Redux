import React, { Component } from 'react'

export default class FOR extends Component {
    //有数据渲染出页面元素
    state = {
        person: [
            { id: 1, name: "小敏", age: 12 },
            { id: 2, name: "大敏", age: 13 },
            { id: 3, name: "小明", age: 14 },
            { id: 4, name: "大明", age: 15 },
        ]
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.person.map(item => {
                           return <li key={item.id}>{item.name}---{item.age}</li>
                        })
                       
                    }
                </ul>
            </div>
        )
    }
}
