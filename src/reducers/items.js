import { SET_ITEMS } from '../actions/index'

export default (state = [], action) => {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case SET_ITEMS:
      state = []
      const itemArray = [...state, action.itemList]
      console.log(itemArray)
      // const [itemArray] = array
      // console.log(itemArray)
      return itemArray[0];
    default:
      return state
  }

}