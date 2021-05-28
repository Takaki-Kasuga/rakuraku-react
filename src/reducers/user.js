import { SET_USER_INFO } from '../actions/index'

const initialState = {
  uid: '',
  name: '',
  email: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      state.uid = action.uid;
      state.name = action.name;
      state.email = action.email;
      return state;
    default:
      return state
  }
}