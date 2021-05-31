import { SET_ORDER_ITEMS } from '../actions/index'

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
    default:
      return state
  }
}