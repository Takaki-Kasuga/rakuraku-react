import { combineReducers } from 'redux'
import itemState from './items'
import toppingState from './toppings'
import userIdState from './user'
import selectedToppingState from './selectedToppings'

export default combineReducers({ itemState, toppingState, userIdState, selectedToppingState })
