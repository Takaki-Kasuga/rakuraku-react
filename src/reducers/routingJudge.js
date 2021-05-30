import { CHANGE_ROUTING_STATUS } from '../actions/index'

const initialState = {
  routingJudge: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ROUTING_STATUS:
      console.log('CHANGE_ROUTING_STATUSです');
      console.log(state);
      console.log(action);
      state.routingJudge = action.routingJudge
      console.log(state);
      return state;
    default:
      return state
  }
}