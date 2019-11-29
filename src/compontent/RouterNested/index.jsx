import React, { Component } from 'react'
import { HashRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'

import Login from './login'
import Layout from './layout'

export default class index extends Component {
    render() {
        return (
            <Router>
                <div>
                <Switch>
                    <Route path='/login' component={Login} />
                    <Route path='/layout' component={Layout} />
                    
                    <Redirect exact from='/' to='/login' />
                </Switch>
                </div>
            </Router>

        )
    }
}
