import { SELECTED_TOPPINGS, DEFAULT_SELECTED_TOPPINGS } from '../actions/index'

const initialState = [
  { id: 1, toppingPrice: 0, toppigName: "" },
  { id: 2, toppingPrice: 0, toppigName: "" },
  { id: 3, toppingPrice: 0, toppigName: "" },
  { id: 4, toppingPrice: 0, toppigName: "" },
  { id: 5, toppingPrice: 0, toppigName: "" },
  { id: 6, toppingPrice: 0, toppigName: "" },
  { id: 7, toppingPrice: 0, toppigName: "" },
  { id: 8, toppingPrice: 0, toppigName: "" },
  { id: 9, toppingPrice: 0, toppigName: "" },
  { id: 10, toppingPrice: 0, toppigName: "" },
  { id: 11, toppingPrice: 0, toppigName: "" },
  { id: 12, toppingPrice: 0, toppigName: "" },
  { id: 13, toppingPrice: 0, toppigName: "" },
  { id: 14, toppingPrice: 0, toppigName: "" },
  { id: 15, toppingPrice: 0, toppigName: "" },
  { id: 16, toppingPrice: 0, toppigName: "" },
  { id: 17, toppingPrice: 0, toppigName: "" },
  { id: 18, toppingPrice: 0, toppigName: "" }
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
    case DEFAULT_SELECTED_TOPPINGS:
      const defaultSelectedToppingArray = [...initialState]
      return defaultSelectedToppingArray;
    default:
      return state
  }

}