import { SET_ORDERS, DELETE_ORDER_INFO, DELETE_ORDER_INFO_NOLOGIN } from '../actions/index'

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
    case DELETE_ORDER_INFO_NOLOGIN:
      console.log('DELETE_ORDER_INFO_NOLOGINが発火')
      const deleteIdArray = [...state]
      const deleteIdIndex = deleteIdArray.findIndex((everyobj) => {
        return everyobj.itemId === action.itemId
      })
      deleteIdArray.splice(deleteIdIndex, 1)
      return deleteIdArray
    default:
      return state
  }
}