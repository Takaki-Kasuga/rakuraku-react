import firebase, { providerGoogle } from '../firebase/firebase';

export const SET_ITEMS = 'SET_ITEMS'
export const SET_TOPPINGS = 'SET_TOPPINGS'

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