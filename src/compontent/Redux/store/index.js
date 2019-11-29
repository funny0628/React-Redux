import {createStore} from 'redux'

import reducers from './reduser' //createStore

const store =createStore(reducers)
export default store
