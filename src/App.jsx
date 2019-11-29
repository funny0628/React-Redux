import React from 'react'
import Nostate from './compontent/nostate'
import State from './compontent/state'

//父子组件之间相互传递参数
import Count from './compontent/count'

//兄弟组件之间相互传递参数
import Brother1 from './compontent/brother/brother1'
import Brother2 from './compontent/brother/brother2'

//爷孙组件之间相互传递参数
import Level1 from './compontent/grandpa/level1'
import Color1 from './compontent/levelcolor/color1'

//列表渲染 , 条件判断 ....
import FOR from './compontent/LoopJudgment/FOR'
import IF from './compontent/LoopJudgment/IF'
import Form from './compontent/LoopJudgment/Form'

//受控组件与非受控组件
import Controlled from './compontent/Controller/Controlled'
import UnControlled from './compontent/Controller/UnControlled'

//react的生命周期钩子
import Life from './compontent/Life/Life'

//react的声明式路由跳转
import Index from './compontent/Router/index'

//嵌套路由登录验证练习
import IIndex from './compontent/RouterNested/index'

//使用redux写购物车计数器
import ReduxNum from './compontent/Redux/index'

//使用react-redux改造购物车
import ReduxCart from './compontent/react-redux-cart/index'

//使用react-redux 购物车
import Reduxtext from './compontent/text-Redux/index'

//小毛跟随鼠标移动
import MouseCat from './compontent/mouseCat'

//测试的组件
// import TT from  './compontent/text'

//定义组件 --
class App extends React.Component {
    //子组件传递给父组件的回调函数
    sendvalue(a){
        console.log('函数被调用了',a)
    }

    state={
        yanse:"pink"
    }
    //点击修改颜色的事件
    changered=()=>{
        this.setState({
            yanse:'red'
        })
       
    }
    changeblue=()=>{
        this.setState({
            yanse:'blue'
        })
       
    }

    render() {
        return <>
        {/* <div>Hello World <span>你好</span></div>
        <h2>静态组件与有状态的组件</h2>
        <Nostate aa='aa' bb={this.state.yanse}/>
        <State aa='aaa' bb={333}/>
        <h2>父子组件之间相互传递参数</h2>
        <Count initCount={66} callback={this.sendvalue}/>
        <hr/>
        <h2>兄弟组件之间相互传递参数</h2>
        <Brother1/>
        <Brother2/>
        <hr/>
        <h2>爷孙组件之间相互传递参数</h2>
        <Level1/>
        <hr/>
        <h2>颜色同步</h2>
          <div>点击修改颜色<button onClick={this.changered}>红色</button><button onClick={this.changeblue}>蓝色</button></div>
        <Color1 cc={this.state.yanse}/>
        <hr/>
        <h2>列表渲染</h2>
        <FOR/>
        <hr/>
        <h2>条件判断</h2>
        <IF/>
        <hr/>
        <h2>表单元素</h2>
        <Form/>
        <hr/>
        <h2>受控组件</h2>
        <Controlled/>
        <hr/>
        <h2>非受控组件</h2>
        <UnControlled/>
        <hr/>
        <h2>react的声明周期钩子</h2>
        <Life/>
        <hr/>
        <h2>react的声明式路由跳转</h2>
        <Index/>
        <hr/>
        <h2>嵌套路由登录验证练习</h2>
        <IIndex/>
        <hr/> */}
        <h2>使用Redux写购物车</h2>
        <ReduxNum/>
        <hr/>
        <h2>使用react-redux优化购物车</h2>
        <ReduxCart/>
        <hr/>
        {/* <h2>使用react-redux测试购物车练习</h2>
        <Reduxtext/> */}
        {/* <hr/>
        <h2>小毛跟随鼠标移动</h2>
        <MouseCat/>
        <hr/>
        <h1>测试的组件</h1>
        <TT><div>你好啊</div></TT> */}
        </>
    }
}

//组件导出
export default App