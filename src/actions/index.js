import firebase, { providerGoogle } from '../firebase/firebase';

export const SET_ITEMS = 'SET_ITEMS'

export const items = (items) => {
  console.log(items)
  return ({
    type: SET_ITEMS,
    itemList: items
  })
}

export const loginWithGoogle = () =>
  async () => {
    {
      await firebase.auth().signInWithRedirect(providerGoogle);
      firebase.auth().getRedirectResult()
    }
  }