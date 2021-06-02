import { UPDATE_ORDER_ITEMS, DELETE_ORDER_ITEMS, DELETE_ALL_ORDER_ITEMS } from '../actions/index'

export default (state = [], action) => {
  switch (action.type) {
    case UPDATE_ORDER_ITEMS:
      console.log('UPDATE_ORDER_ITEMSが発火')
      const mostNewCartArray = [...state]
      mostNewCartArray.splice(0)
      if (action.updateOrderItemsList) {
        action.updateOrderItemsList.forEach((pushList) => {
          mostNewCartArray.push(pushList)
        })
      }
      return mostNewCartArray
    case DELETE_ORDER_ITEMS:
      console.log('DELETE_ORDER_INFO')
      const deleteArray = [...state]
      const deleteIndex = deleteArray.findIndex((everyobj) => {
        return everyobj.uniqueId === action.deleteOrderItemsId
      })
      deleteArray.splice(deleteIndex, 1)
      return deleteArray

    case DELETE_ALL_ORDER_ITEMS:
      console.log('DELETE_ALL_ORDER_ITEMS')
      const deleteAllArray = [...state]
      deleteAllArray.splice(0)
      return deleteAllArray
    default:
      return state
  }
}