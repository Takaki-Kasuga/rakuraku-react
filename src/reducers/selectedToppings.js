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

export default (state = initialState, action) => {
  console.log('selectedToppingが発火')
  console.log(state)
  console.log(action)
  switch (action.type) {
    case SELECTED_TOPPINGS:
      const selectedToppingArray = [...state]
      selectedToppingArray.splice((Number(action.selectedToppingsList.id) - 1), 1, action.selectedToppingsList)
      console.log(selectedToppingArray)
      return selectedToppingArray;
    default:
      return state
  }

}