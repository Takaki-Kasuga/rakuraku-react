import { combineReducers } from 'redux'
import itemState from './items'
import toppingState from './toppings'
import userIdState from './user'

import orderHistory from './orderHistory'
export default combineReducers({ itemState, toppingState, userIdState,orderHistory  })
