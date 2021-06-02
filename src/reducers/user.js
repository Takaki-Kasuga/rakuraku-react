import { SignalCellularNull } from '@material-ui/icons';
import { SET_USER_INFO, DELETE_USER_INFO } from '../actions/index'

const initialState = {
  uid: '',
  name: '',
  email: '',
  login_user: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      console.log('SET_USER_INFOが発火')
      state.uid = action.uid;
      state.email = action.email;
      state.login_user = action.login_user;
      if (action.name !== null) {
        state.name = action.name;
      }
      return state;
    case DELETE_USER_INFO:
      console.log('DELETE_USER_INFOが発火')
      state.uid = action.uid;
      state.name = action.name;
      state.email = action.email;
      state.login_user = action.login_user;
      return state;
    default:
      return state
  }
}