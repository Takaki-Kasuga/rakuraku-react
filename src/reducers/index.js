import { combineReducers } from 'redux'
import itemState from './items'
import toppingState from './toppings'

export default combineReducers({ itemState, toppingState })