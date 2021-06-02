import { SET_ORDERED, RESET_ORDERED, CHANGE_ORDERED_STATUS } from '../actions/index'

export default (state = [], action) => {
  switch (action.type) {
    case SET_ORDERED:
      console.log('SET_ORDEREDが発火')
      const ob = [...state, action];
      return ob;
    case RESET_ORDERED:
      const mostNewCartArray = [...state]
      mostNewCartArray.splice(0)
      return mostNewCartArray;
    case CHANGE_ORDERED_STATUS:
      console.log('CHANGE_ORDERED_STATUSが発火')
      state[action.index].orderedItems.status = action.status
      return state
    default:
      return state
  }
}