import { SET_ITEMS, SEARCH_ITEMS } from '../actions/index'

export default (state = [], action) => {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case SET_ITEMS:
      state = []
      const itemArray = action.itemList
      return itemArray;
    case SEARCH_ITEMS:
      console.log('SEARCH_ITEMSが発火')
      const serchArray = []
      const newState = [...state]
      console.log('アイウエオ'.indexOf('イ'))
      newState.forEach((search) => {
        console.log(search)
        console.log(search.name)
        console.log(action.seachItemList)
        const originName = search.name
        const serchName = action.seachItemList
        console.log(originName.indexOf(serchName))
        if (originName.indexOf(serchName) !== -1) {
          console.log('検索が人しました。')
          serchArray.push(search)
        }
      })
      if (serchArray.length === 0) {
        alert('検索条件に一致する商品がございません。')
        return newState;
      } else {
        return serchArray;
      }

    default:
      return state
  }

}