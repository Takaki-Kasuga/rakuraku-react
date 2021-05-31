import { UPDATE_ORDER_ITEMS } from '../actions/index'

export default (state = [], action) => {
  switch (action.type) {
    case UPDATE_ORDER_ITEMS:
      console.log('UPDATE_ORDER_ITEMSが発火')
      console.log(state)
      console.log(action)
      const mostNewCartArray = [...state]
      mostNewCartArray.splice(0)
      action.updateOrderItemsList.forEach((pushList) => {
        mostNewCartArray.push(pushList)
      })
      console.log(mostNewCartArray)
      return mostNewCartArray
    default:
      return state
  }
}