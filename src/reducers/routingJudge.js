import { CHANGE_ROUTING_STATUS, CHANGE_ZERO_ROUTING_STATUS } from '../actions/index'

const initialState = {
  routingJudge: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ROUTING_STATUS:
      console.log('CHANGE_ROUTING_STATUSが発火')
      state.routingJudge = action.routingJudge
      return state;
    case CHANGE_ZERO_ROUTING_STATUS:
      console.log('CHANGE_ZERO_ROUTING_STATUSが発火')
      state.routingJudge = action.routingJudge
      return state;
    default:
      return state
  }
}