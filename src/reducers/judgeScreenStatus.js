import { JUDGE_SCREEN_STATUS } from '../actions/index'

const initialState = {
  judgeScreenStatus: false
}

export default (state = initialState, action) => {
  console.log('JUDGE_SCREEN_STATUSが発火')
  console.log(state)
  console.log(action)
  switch (action.type) {
    case JUDGE_SCREEN_STATUS:
      const serchArray = {}
      const newState = { ...state }
      console.log(serchArray)
      console.log(newState)
      // newState.forEach((search) => {
      //   const originName = search.name
      //   const serchName = action.seachItemList
      //   if (originName.indexOf(serchName) !== -1) {
      //     serchArray.push(search)
      //   }
      // })
      // if (serchArray.length === 0) {
      //   return serchArray;
      // } else {
      //   return serchArray;
      // }
      return state;
    default:
      return state
  }
}