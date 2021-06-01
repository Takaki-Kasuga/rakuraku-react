import { combineReducers } from 'redux'
import itemState from './items'
import toppingState from './toppings'
import userIdState from './user'
import selectedToppingState from './selectedToppings'
import orderState from './orders'
import routingJudge from './routingJudge'
// import orderHistory from './orderHistory'
import updateOrderItemState from './updateOrderItems'
import orderUniqueIdState from './orderUniqueId'
import orderForCartState from './orderForCart'
import setOrderItems from './setOrderItems'
import setOrderedItems from './setOrderedItems.js'

export default combineReducers({ itemState, toppingState, userIdState, selectedToppingState, orderState, routingJudge, updateOrderItemState, orderUniqueIdState, orderForCartState, setOrderItems, setOrderedItems })

