import { SET_ORDERS, DELETE_ORDER_INFO, DELETE_ORDER_INFO_NOLOGIN } from '../actions/index'

export default (state = [], action) => {
  switch (action.type) {
    case SET_ORDERS:
      const orderArray = [...state, action.orderInfomationList]
      return orderArray;
    case DELETE_ORDER_INFO:
      const deleteArray = [...state]
      const deleteIndex = deleteArray.findIndex((everyobj) => {
        return everyobj.uniqueId === action.uniqueId
      })
      deleteArray.splice(deleteIndex, 1)
      return deleteArray
    case DELETE_ORDER_INFO_NOLOGIN:
      const deleteIdArray = [...state]
      const deleteIdIndex = deleteIdArray.findIndex((everyobj) => {
        return everyobj.itemId === action.deleteOrderInfomationIdNum.itemId
      })
      deleteIdArray.splice(deleteIdIndex, 1)
      return deleteIdArray
    default:
      return state
  }
}