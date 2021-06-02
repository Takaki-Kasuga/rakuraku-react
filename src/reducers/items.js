import { SET_ITEMS, SEARCH_ITEMS } from '../actions/index'

export default (state = [], action) => {
  switch (action.type) {
    case SET_ITEMS:
      console.log('SET_ITEMSが発火しました。')
      state = []
      const itemArray = action.itemList
      return itemArray;
    case SEARCH_ITEMS:
      console.log('SEARCH_ITEMSが発火しました。')
      const serchArray = []
      const newState = [...action.seachItemList[1]]
      newState.forEach((search) => {
        const originName = search.name
        const serchName = action.seachItemList[0]
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