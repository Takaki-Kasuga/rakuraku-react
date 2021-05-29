
import firebase, { providerGoogle } from '../firebase/firebase';

export const SET_ITEMS = 'SET_ITEMS'
export const SET_TOPPINGS = 'SET_TOPPINGS'
export const SET_USER_INFO = 'SET_USER_INFO';
export const DELETE_USER_INFO = 'DELETE_USER_INFO';
export const SELECTED_TOPPINGS = 'SELECTED_TOPPINGS';
export const SET_ORDERS = 'SET_ORDERS';
export const DELETE_ORDER_INFO = 'DELETE_ORDER_INFO'
export const DELETE_ORDER_INFO_NOLOGIN = 'DELETE_ORDER_INFO_NOLOGIN'

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

export const orderInfomation = (orderInfomation) => {
  console.log(orderInfomation)
  console.log('SET_ORDERSが発火')
  return ({
    type: SET_ORDERS,
    orderInfomationList: orderInfomation
  })
}

export const deleteOrderInfomation = (deleteOrderInfomation) => {
  console.log(deleteOrderInfomation)
  console.log('DELETE_ORDER_INFOが発火')
  return ({
    type: DELETE_ORDER_INFO,
    deleteOrderInfomationId: deleteOrderInfomation
  })
}

export const deleteOrderInfomationIdNum = (deleteOrderInfomationIdNum) => {
  console.log(deleteOrderInfomationIdNum)
  console.log('DELETE_ORDER_INFO_NOLOGINが発火')
  return ({
    type: DELETE_ORDER_INFO_NOLOGIN,
    deleteOrderInfomationIdNum: deleteOrderInfomationIdNum
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

export const signUp = (username, email, password, confirmPassword) => {
  return async (dispatch) => {
    //以下バリデーション
    if (username === "" || email === "" || password === "" || confirmPassword === "") {
      alert('空欄です');
      return false;
    }
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(result => {
        console.log('私だ')
        const user = result.user;
        if (user) {
          const uid = user.uid;
          console.log('登録に成功しました！')
          console.log(result);
          console.log(result.user.uid);
          console.log(result.user.email);
          console.log(username);
          const user_id = result.user.uid;
          const user_email = result.user.email;
          console.log(dispatch);
          dispatch(setUserInfo(user_id, username, user_email));
        }
      }).catch((error) => {
        alert('ユーザー登録に失敗しました。お手数ですがもう1度お試しください')
      })
  }
}