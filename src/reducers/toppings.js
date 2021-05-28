import { SET_TOPPINGS } from '../actions/index'

export default (state = [], action) => {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case SET_TOPPINGS:
      state = []
      const toppingArray = action.toppingList
      console.log(toppingArray)
      console.log(toppingArray.length)
      return toppingArray;
    default:
      return state
  }

}