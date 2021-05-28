import { SET_ITEMS } from '../actions/index'

export default (state = [], action) => {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case SET_ITEMS:
      state = []
      const itemArray = action.itemList
      console.log(itemArray)
      console.log(itemArray.length)
      // const [itemArray] = array
      // console.log(itemArray)
      return itemArray;
    default:
      return state
  }

}