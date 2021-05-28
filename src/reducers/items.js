import { SET_ITEMS } from '../actions/index'

export default (state = [], action) => {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case SET_ITEMS:
      state = []
      const array = [...state, action.itemList]
      console.log(array)
      const [itemArray] = array
      console.log(itemArray)
      return itemArray;
    default:
      return state
  }

}