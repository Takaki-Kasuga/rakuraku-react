import { SET_TOPPINGS } from '../actions/index'

export default (state = [], action) => {
  switch (action.type) {
    case SET_TOPPINGS:
      state = []
      const toppingArray = action.toppingList
      return toppingArray;
    default:
      return state
  }

}