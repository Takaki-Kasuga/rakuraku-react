import { SET_ORDER_ITEMS, DELETE_ORDER_INFO, DELETE_ORDER_INFO_NOLOGIN, DELETE_ALL_ORDER } from '../actions/index'

export default (state = [], action) => {
  switch (action.type) {
    case SET_ORDER_ITEMS:
      console.log('SET_ORDER_ITEMS')
      console.log(state)
      console.log(action)
      const mostNewCartArray = [...state]
      mostNewCartArray.splice(0)
      if (action.orderItems) {
        action.orderItems.forEach((pushList) => {
          mostNewCartArray.push(pushList)
        })
      }
      console.log(mostNewCartArray)
      return mostNewCartArray;
    case DELETE_ORDER_INFO:
      console.log('DELETE_ORDER_INFO')
      console.log(state)
      console.log(action)
      const deleteArray = [...state]
      const deleteIndex = deleteArray.findIndex((everyobj) => {
        console.log(everyobj)
        return everyobj.uniqueItemId === action.deleteOrderInfomationId
      })
      console.log(deleteIndex)
      deleteArray.splice(deleteIndex, 1)
      console.log(deleteArray)
      return deleteArray

    case DELETE_ORDER_INFO_NOLOGIN:
      console.log('DELETE_ORDER_INFO_NOLOGIN')
      const deleteIdArray = [...state]
      const deleteIdIndex = deleteIdArray.findIndex((everyobj) => {
        return everyobj.itemId === action.deleteOrderInfomationIdNum.itemId
      })
      deleteIdArray.splice(deleteIdIndex, 1)
      return deleteIdArray
    case DELETE_ALL_ORDER:
      console.log('DELETE_ALL_ORDERが発火')
      const deleteAllArray = [...state]
      deleteAllArray.splice(0)
      console.log(deleteAllArray)
      return deleteAllArray
    default:
      return state
  }
}