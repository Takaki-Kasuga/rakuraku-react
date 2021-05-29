import { SET_ORDERS, DELETE_ORDER_INFO } from '../actions/index'

export default (state = [], action) => {
  console.log('SET_ORDERSリデューサー発火')
  console.log(state)
  console.log(action)
  switch (action.type) {
    case SET_ORDERS:
      const orderArray = [...state, action.orderInfomationList]
      console.log(orderArray)
      return orderArray;
    case DELETE_ORDER_INFO:
      const deleteArray = [...state]
      const deleteIndex = deleteArray.findIndex((everyobj) => {
        return everyobj.uniqueId === action.uniqueId
      })
      deleteArray.splice(deleteIndex, 1)
      return deleteArray
    default:
      return state
  }
}