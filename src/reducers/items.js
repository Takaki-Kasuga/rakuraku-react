import { SET_ITEMS, SEARCH_ITEMS } from '../actions/index'

export default (state = [], action) => {
  switch (action.type) {
    case SET_ITEMS:
      state = []
      const itemArray = action.itemList
      return itemArray;
    case SEARCH_ITEMS:
      const serchArray = []
      const newState = [...state]
      newState.forEach((search) => {
        const originName = search.name
        const serchName = action.seachItemList
        if (originName.indexOf(serchName) !== -1) {
          serchArray.push(search)
        }
      })
      if (serchArray.length === 0) {
        return serchArray;
      } else {
        return serchArray;
      }

    default:
      return state
  }

}