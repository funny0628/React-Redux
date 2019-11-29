import React, { Component } from 'react'

import img from '../../../static/images/wordpress-20120614-01.jpg'

export default class nofound extends Component {
    render() {
        return (
            <div>
                {/* 加载图片可以是网络路径,
                    如果不想要加载网络的路径,可以IBA图片放在本地,static的路径要与src是同级的,直接使用img的src 来导入
                    如果static不是在src的同级时,就需要使用模块化导入来解决,配置url 和file的loader 来配置,导入图片来模块来开发
                        此时可以配置限制图片的大小,是否使用base64格式来转化图片,(或者是转化成本地的图片路径,但是要进行转码)
                */}
                路径不对,找不到你象要的内容<br/>
                {/* 直接使用网络路径 */}
                {/* <img src="http://img.zzbaike.com/mdb/main/wordpress-20120614-01.jpg" alt=""/> */}
                <img src={img} alt=""/>
                {/* 如果static文件是和src文件在同一级目录下那么直接使用img的src属性导入图片的链接是没有问题的,但是如果static目录在src的目录下面就会找不到报错
                    这是就可以使用模块化的思想来导入图片.,但是要配置相应的loader
                */}

            </div>
        )
    }
}
