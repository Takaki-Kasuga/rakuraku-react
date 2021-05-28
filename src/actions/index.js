import firebase, { providerGoogle } from '../firebase/firebase';

export const SET_ITEMS = 'SET_ITEMS'
export const SET_TOPPINGS = 'SET_TOPPINGS'
export const SET_USER_INFO = 'SET_USER_INFO';
export const DELETE_USER_INFO = 'DELETE_USER_INFO';
export const SELECTED_TOPPINGS = 'SELECTED_TOPPINGS';

export const items = (items) => {
  console.log(items)
  console.log(items.length)
  return ({
    type: SET_ITEMS,
    itemList: items
  })
}

export const toppings = (toppings) => {
  console.log(toppings)
  console.log('toppingsactionsが発火')
  return ({
    type: SET_TOPPINGS,
    toppingList: toppings
  })
}

export const selectedToppings = (selectedToppings) => {
  console.log(selectedToppings)
  console.log('SELECTED_TOPPINGSが発火')
  return ({
    type: SELECTED_TOPPINGS,
    selectedToppingsList: selectedToppings
  })
}


export const setUserInfo = (uid, name, email) => {
  return (
    {
      type: SET_USER_INFO,
      uid: uid,
      name: name,
      email: email,
      login_user: true
    }
  )
}

export const deleteUserInfo = () => {
  return (
    {
      type: DELETE_USER_INFO,
      uid: '',
      name: '',
      email: '',
      login_user: false
    }
  )
}

export const loginWithGoogle = () =>
  async () => {
    {
      await firebase.auth().signInWithRedirect(providerGoogle);
      firebase.auth().getRedirectResult()
    }
  }

export const logout = () =>
  async () => {
    {
      await firebase.auth().signOut()
    }
  }