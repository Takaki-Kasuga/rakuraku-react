import { SET_ITEMS } from '../actions/index'

export default (state = [], action) => {
  console.log(state)
  switch (action.type) {
    case SET_ITEMS:
      const itemList = [state, action.itemList]
      if (itemList.length >= 1) {
        console.log('値が0ではない時')
        const notDuplicateItems = itemList.filter(function (item, index, self) {
          console.log(item)
          return (self.findIndex(function (compareItem) {
            console.log(compareItem)
            return (item.id === compareItem.id)
          }) === index);
        });
        return notDuplicateItems
      } else {
        console.log('値が0の時')
        return itemList
      }
    default:
      return state
  }

}