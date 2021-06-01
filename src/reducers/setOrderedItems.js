import { SET_ORDERED, RESET_ORDERED, CHANGE_ORDERED_STATUS } from '../actions/index'

export default (state = [], action) => {
  switch (action.type) {
    case SET_ORDERED:
      console.log(action)
      const ob = [...state, action];
      return ob;
    case RESET_ORDERED:
      const mostNewCartArray = [...state]
      mostNewCartArray.splice(0)
      return mostNewCartArray;
    case CHANGE_ORDERED_STATUS:
      console.log(state);
      state[action.index].orderedItems.status = action.status
      console.log(state);
      return state
    default:
      return state
  }
}