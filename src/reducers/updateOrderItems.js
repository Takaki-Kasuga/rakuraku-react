import { UPDATE_ORDER_ITEMS, DELETE_ORDER_ITEMS } from '../actions/index'

export default (state = [], action) => {
  switch (action.type) {
    case UPDATE_ORDER_ITEMS:
      console.log('UPDATE_ORDER_ITEMSが発火')
      console.log(state)
      console.log(action)
      const mostNewCartArray = [...state]
      mostNewCartArray.splice(0)
      if (action.updateOrderItemsList) {
        action.updateOrderItemsList.forEach((pushList) => {
          mostNewCartArray.push(pushList)
        })
      }
      console.log(mostNewCartArray)
      return mostNewCartArray
    case DELETE_ORDER_ITEMS:
      console.log('DELETE_ORDER_INFO')
      console.log(state)
      console.log(action)
      const deleteArray = [...state]
      const deleteIndex = deleteArray.findIndex((everyobj) => {
        return everyobj.uniqueId === action.deleteOrderItemsId
      })
      deleteArray.splice(deleteIndex, 1)
      return deleteArray
    default:
      return state
  }
}