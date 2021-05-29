import { combineReducers } from 'redux'
import itemState from './items'
import toppingState from './toppings'
import userIdState from './user'
import selectedToppingState from './selectedToppings'
import orderState from './orders'

export default combineReducers({ itemState, toppingState, userIdState, selectedToppingState, orderState })
