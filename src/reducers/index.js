import { combineReducers } from 'redux'
import itemState from './items'
import toppingState from './toppings'
import userIdState from './user'
import selectedToppingState from './selectedToppings'
import orderState from './orders'
import routingJudge from './routingJudge'
import orderHistory from './orderHistory'
import updateOrderItemState from './updateOrderItems'
import orderUniqueIdState from './orderUniqueId'

export default combineReducers({ itemState, toppingState, userIdState, selectedToppingState, orderState, routingJudge, orderHistory, updateOrderItemState, orderUniqueIdState })

