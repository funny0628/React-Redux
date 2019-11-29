//创建store 托管给reduser
import {createStore} from 'redux'

import redusers from './redusers'

export const store = createStore(redusers)