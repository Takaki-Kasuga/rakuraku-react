import { SET_ORDERED, RESET_ORDERED } from '../actions/index'

export default (state = [], action) => {
  switch (action.type) {
    case SET_ORDERED:
      console.log(state);
      console.log(action);
      // state.forEach(element => {
      // console.log('elementです')
      // console.log(element);
      // if (element.orderedItemsId === action.orderedItemsId) {
      // return [...state]
      // } else {
      const ob = [...state, action];
      console.log(ob)
      return ob;
    // }
    // })
    // const mostNewCartArray = [...state]
    // mostNewCartArray.splice(0)
    // mostNewCartArray.push(action.orderd)
    // console.log(mostNewCartArray)
    // return mostNewCartArray;
    case RESET_ORDERED:
      const mostNewCartArray = [...state]
      mostNewCartArray.splice(0)
      return mostNewCartArray;
    default:
      return state
  }
}