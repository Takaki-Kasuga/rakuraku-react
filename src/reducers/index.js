import { combineReducers } from 'redux'
import itemState from './items'
import userIdState from './user'

export default combineReducers({ itemState, userIdState })