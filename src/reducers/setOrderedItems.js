import { SET_ORDERED_ITEMS } from '../actions/index'

export default (state = [], action) => {
  switch (action.type) {
    case SET_ORDERED_ITEMS:
      const mostNewCartArray = [...state]
      mostNewCartArray.splice(0)
      if (action.orderedItems) {
        action.orderedItems.forEach((pushList) => {
          mostNewCartArray.push(pushList)
        })
      }
      console.log(mostNewCartArray);
      return mostNewCartArray;
    default:
      return state
  }
}