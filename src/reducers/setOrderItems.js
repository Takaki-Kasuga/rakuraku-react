import { SET_ORDER_ITEMS, DELETE_ORDER_INFO } from '../actions/index'

export default (state = [], action) => {
  switch (action.type) {
    case SET_ORDER_ITEMS:
      const mostNewCartArray = [...state]
      mostNewCartArray.splice(0)
      if (action.orderItems) {
        action.orderItems.forEach((pushList) => {
          mostNewCartArray.push(pushList)
        })
      }
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
    default:
      return state
  }
}