import { SELECTED_TOPPINGS, DEFAULT_SELECTED_TOPPINGS } from '../actions/index'

const initialState = [
  { id: 1, toppigName: "" },
  { id: 2, toppigName: "" },
  { id: 3, toppigName: "" },
  { id: 4, toppigName: "" },
  { id: 5, toppigName: "" },
  { id: 6, toppigName: "" },
  { id: 7, toppigName: "" },
  { id: 8, toppigName: "" },
  { id: 9, toppigName: "" },
  { id: 10, toppigName: "" },
  { id: 11, toppigName: "" },
  { id: 12, toppigName: "" },
  { id: 13, toppigName: "" },
  { id: 14, toppigName: "" },
  { id: 15, toppigName: "" },
  { id: 16, toppigName: "" },
  { id: 17, toppigName: "" },
  { id: 18, toppigName: "" }
]

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_TOPPINGS:
      console.log('SELECTED_TOPPINGSが発火')
      const selectedToppingArray = [...state]
      selectedToppingArray.splice((Number(action.selectedToppingsList.id) - 1), 1, action.selectedToppingsList)
      return selectedToppingArray;
    case DEFAULT_SELECTED_TOPPINGS:
      console.log('DEFAULT_SELECTED_TOPPINGSが発火')
      const defaultSelectedToppingArray = [...initialState]
      return defaultSelectedToppingArray;
    default:
      return state
  }

}