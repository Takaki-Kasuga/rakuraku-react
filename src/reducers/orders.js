import { SET_ORDERS, DELETE_ORDER_INFO, DELETE_ORDER_INFO_NOLOGIN, DELETE_ALL_ORDER } from '../actions/index'

export default (state = [], action) => {
  switch (action.type) {
    case SET_ORDERS:
      // console.log(action)
      // console.log('SET_ORDERSが発火')
      // const mostNewCartArray = [...state]
      // mostNewCartArray.splice(0)
      // if (action.orderInfomationList.length !== 0) {
      //   action.orderInfomationList.forEach((pushList) => {
      //     console.log('１回転')
      //     console.log(pushList)
      //     mostNewCartArray.push(pushList)
      //   })
      // }
      // console.log(mostNewCartArray)
      return state;
    // case DELETE_ORDER_INFO:
    //   const deleteArray = [...state]
    //   const deleteIndex = deleteArray.findIndex((everyobj) => {
    //     return everyobj.uniqueId === action.uniqueId
    //   })
    //   deleteArray.splice(deleteIndex, 1)
    //   return deleteArray
    // case DELETE_ORDER_INFO_NOLOGIN:
    //   const deleteIdArray = [...state]
    //   const deleteIdIndex = deleteIdArray.findIndex((everyobj) => {
    //     return everyobj.itemId === action.deleteOrderInfomationIdNum.itemId
    //   })
    //   deleteIdArray.splice(deleteIdIndex, 1)
    //   return deleteIdArray
    // case DELETE_ALL_ORDER:
    //   console.log('DELETE_ALL_ORDERが発火')
    //   const deleteAllArray = [...state]
    //   deleteAllArray.splice(0)
    //   console.log(deleteAllArray)
    //   return deleteAllArray
    default:
      return state
  }
}