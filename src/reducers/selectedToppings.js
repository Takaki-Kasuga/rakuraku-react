import { SELECTED_TOPPINGS } from '../actions/index'

const initialState = [
  { id: 1, toppingPrice: 0, },
  { id: 2, toppingPrice: 0, },
  { id: 3, toppingPrice: 0, },
  { id: 4, toppingPrice: 0, },
  { id: 5, toppingPrice: 0, },
  { id: 6, toppingPrice: 0, },
  { id: 7, toppingPrice: 0, },
  { id: 8, toppingPrice: 0, },
  { id: 9, toppingPrice: 0, },
  { id: 10, toppingPrice: 0, },
  { id: 11, toppingPrice: 0, },
  { id: 12, toppingPrice: 0, },
  { id: 13, toppingPrice: 0, },
  { id: 14, toppingPrice: 0, },
  { id: 15, toppingPrice: 0, },
  { id: 16, toppingPrice: 0, },
  { id: 17, toppingPrice: 0, },
  { id: 18, toppingPrice: 0, }
]

export default (state = [], action) => {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case SELECTED_TOPPINGS:
      console.log(action)
      return state;
    default:
      return state
  }

}