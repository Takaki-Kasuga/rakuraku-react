import firebase, { providerGoogle } from '../firebase/firebase';

export const SET_ITEMS = 'SET_ITEMS'
export const SEARCH_ITEMS = 'SEARCH_ITEMS'
export const SET_TOPPINGS = 'SET_TOPPINGS'
export const SET_USER_INFO = 'SET_USER_INFO';
export const DELETE_USER_INFO = 'DELETE_USER_INFO';
export const SELECTED_TOPPINGS = 'SELECTED_TOPPINGS';
export const DEFAULT_SELECTED_TOPPINGS = 'DEFAULT_SELECTED_TOPPINGS';
export const SET_ORDERS = 'SET_ORDERS';
export const DELETE_ORDER_INFO = 'DELETE_ORDER_INFO'
export const DELETE_ORDER_INFO_NOLOGIN = 'DELETE_ORDER_INFO_NOLOGIN'
export const DELETE_ALL_ORDER = 'DELETE_ALL_ORDER'
export const CHANGE_ROUTING_STATUS = 'CHANGE_ROUTING_STATUS';
export const CHANGE_ZERO_ROUTING_STATUS = 'CHANGE_ZERO_ROUTING_STATUS';
export const JUDGE_SCREEN_STATUS = 'JUDGE_SCREEN_STATUS';
export const UPDATE_ORDER_ITEMS = 'UPDATE_ORDER_ITEMS';
export const ORDER_UNIQUE_ID = 'ORDER_UNIQUE_ID';
export const SET_ORDER_FOR_CART = 'SET_ORDER_FOR_CART';
export const SET_ORDER_ITEMS = 'SET_ORDER_ITEMS';
export const SET_ORDERED = 'SET_ORDERED';
export const RESET_ORDERED = 'RESET_ORDERED';
export const DELETE_ORDER_ITEMS = 'DELETE_ORDER_ITEMS';
export const CHANGE_ORDERED_STATUS = 'CHANGE_ORDERED_STATUS';
export const DELETE_UNIQUE_ID = 'DELETE_UNIQUE_ID';
export const DELETE_ALL_ORDER_ITEMS = 'DELETE_ALL_ORDER_ITEMS';


export const CANCEL = 'cancel'
export const ITEM = 'item'

export const items = (items) => {
  return ({
    type: SET_ITEMS,
    itemList: items
  })
}

export const seachItems = (seachItems) => {
  return ({
    type: SEARCH_ITEMS,
    seachItemList: seachItems
  })
}

export const toppings = (toppings) => {
  return ({
    type: SET_TOPPINGS,
    toppingList: toppings
  })
}

export const selectedToppings = (selectedToppings) => {
  return ({
    type: SELECTED_TOPPINGS,
    selectedToppingsList: selectedToppings
  })
}

export const defaultSelectedToppings = (defaultSelectedToppings) => {
  return ({
    type: DEFAULT_SELECTED_TOPPINGS,
    defaultSelectedToppingsList: defaultSelectedToppings
  })
}

export const orderInfomation = (orderInfomation) => {
  return ({
    type: SET_ORDERS,
    orderInfomationList: orderInfomation
  })
}

export const orderForCartInfomation = (orderForCartInfomation) => {
  return ({
    type: SET_ORDER_FOR_CART,
    orderForCartInfomationList: orderForCartInfomation
  })
}

export const deleteOrderInfomation = (deleteOrderInfomation) => {
  return ({
    type: DELETE_ORDER_INFO,
    deleteOrderInfomationId: deleteOrderInfomation
  })
}

export const deleteOrderInfomationIdNum = (deleteOrderInfomationIdNum) => {
  return ({
    type: DELETE_ORDER_INFO_NOLOGIN,
    deleteOrderInfomationIdNum: deleteOrderInfomationIdNum
  })
}

export const deleteAllOrder = (deleteAllOrder) => {
  return ({
    type: DELETE_ALL_ORDER,
    deleteAllOrderInfo: deleteAllOrder
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

export const changeRoutingStatus = () => {
  return (
    {
      type: CHANGE_ROUTING_STATUS,
      routingJudge: 1
    }
  )
}

export const changeZeroRoutingStatus = () => {
  return (
    {
      type: CHANGE_ZERO_ROUTING_STATUS,
      routingJudge: 0
    }
  )
}

export const setOrderItems = (orderItems) => {
  return (
    {
      type: SET_ORDER_ITEMS,
      orderItems: orderItems
    }
  )
}

export const setOrdered = (orderedItemsId, orderedItems) => {
  return (
    {
      type: SET_ORDERED,
      orderedItemsId: orderedItemsId,
      orderedItems: orderedItems
    }
  )
}

export const resetOrdered = () => {
  return (
    {
      type: RESET_ORDERED
    }
  )
}

export const changeOrderedStatus = (index) => {
  return {
    type: CHANGE_ORDERED_STATUS,
    status: 9,
    index: index
  }
}

export const loginWithGoogle = () =>
  async () => {
    {
      await firebase.auth().signInWithRedirect(providerGoogle);
      firebase.auth().getRedirectResult()
    }
  }

export const logout = () =>
  async (dispatch) => {
    {
      await firebase.auth().signOut()
        .then(result => {
          console.log('ログアウト成功です！')
          localStorage.setItem('routingJudge', Number('0'));
          dispatch(changeZeroRoutingStatus());
        }).catch((error) => {
          alert('ログアウトに失敗しました。お手数ですがもう1度お試しください')
        })
    }
  }

export const cancel = () => ({
  type: CANCEL
})

export const signUp = (username, email, password, confirmPassword) => {
  return async (dispatch) => {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async result => {
        await firebase.auth().currentUser.updateProfile({
          displayName: username
        }).then(result2 => {
          const user = result.user;
          if (user) {
            const user_id = result.user.uid;
            const user_email = result.user.email;
            dispatch(setUserInfo(user_id, username, user_email));
          }
        }).catch((error) => {
          alert('ユーザー登録に失敗しました。お手数ですがもう一度やり直してください')
        })
      }).catch((error) => {
        console.log(error)
        alert('入力したメールアドレスはすでに使用されています。')
      })
  }
}

export const signIn = (email, password) => {
  return async (dispatch) => {
    await firebase.auth().signInWithEmailAndPassword(email, password)
      .then(result => {
        const user = result.user;
        if (user) {
          const user_id = result.user.uid;
          const user_name = result.user.displayName;
          const user_email = result.user.email;
          dispatch(setUserInfo(user_id, user_name, user_email));
        }
      }).catch((error) => {
        alert('メールアドレスかパスワードが間違えています')
      })
  }
}

export const updateOrderItems = (updateOrderItems) => {
  console.log('UPDATE_ORDER_ITEMS')
  return ({
    type: UPDATE_ORDER_ITEMS,
    updateOrderItemsList: updateOrderItems
  })
}

export const orderUniqueId = (orderUniqueId) => {
  return ({
    type: ORDER_UNIQUE_ID,
    orderUniqueIdForCart: orderUniqueId
  })
}

export const deleteOrderItems = (deleteOrderItems) => {
  return ({
    type: DELETE_ORDER_ITEMS,
    deleteOrderItemsId: deleteOrderItems
  })
}

export const deleteUniqueId = (deleteUniqueId) => {
  return ({
    type: DELETE_UNIQUE_ID,
    deleteUniqueIdreset: deleteUniqueId
  })
}
export const deleteAllOrderItems = (deleteAllOrderItems) => {
  return ({
    type: DELETE_ALL_ORDER_ITEMS,
    deleteAllOrderItemsreset: deleteAllOrderItems
  })
}