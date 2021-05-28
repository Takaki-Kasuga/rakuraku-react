export const SET_ITEMS = 'SET_ITEMS'

export const items = (items) => {
  console.log(items)
  return ({
    type: SET_ITEMS,
    itemList: items
  })
}