import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import firebase from './firebase/firebase'
import Header from './components/Header.js';
import { Home } from './components/Home';
import { CartList } from './components/CartList';
import { Detail } from './components/Detail';
import { ResettingEmail } from './components/ResettingEmail.js';
import { Login } from './components/Login.js';
import { OrderComplete } from './components/OrderComplete.js';
import OrderConfirm from './components/OrderConfirm.js';
import OrderHistory from './components/OrderHistory.js';
import { RegisterEmail } from './components/RegisterEmail.js';
import { TermOfUse } from './components/TermOfUse.js';
import UserAccount from './components/UserAccount.js';
import { orderInfomation, setUserInfo, deleteUserInfo, deleteAllOrder, updateOrderItems, orderUniqueId, orderForCartInfomation, toppings, items } from './actions/index'
import { ReorderRounded } from "@material-ui/icons";

const getState = (state) => state.userIdState.login_user;

function App() {
  const userIdState = useSelector((state) => state.userIdState)
  const getRoutingJudge = useSelector((state) => state.routingJudge.routingJudge)
  const updateOrderItemState = useSelector((state) => state.updateOrderItemState)
  const dispatch = useDispatch()

  const storage = Number(localStorage.getItem('routingJudge'));

  // 画面描画時にオーダーの情報値を取ってる
  useEffect(() => {
    console.log('App.jsのonAuthStateChangedが発火')
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user)
        const user_name = firebase.auth().currentUser.displayName;
        const user_email = firebase.auth().currentUser.email;
        const user_id = firebase.auth().currentUser.uid;
        dispatch(setUserInfo(user_id, user_name, user_email));

        firebase
          .firestore()
          .collection(`users/${userIdState.uid}/orders`)
          .get()
          .then((snapshot) => {
            console.log('orederの情報を取ってくる。')
            snapshot.forEach((doc) => {
              console.log(doc.id)
              console.log(doc.data())
              const fetchData = doc.data()
              fetchData.uniqueId = doc.id
              console.log(fetchData)
              dispatch(orderInfomation(fetchData))
              // ステータスが0のオーダー情報のみ取得して各stateに商品オブジェクトと一意のオーダーIDを追加
              if (doc.data().status === 0) {
                dispatch(updateOrderItems(doc.data().orderItems))
                dispatch(orderUniqueId(doc.id))
              }
            }
            );
          });
      } else {
        console.log('ログイン情報を保持していません')
        dispatch(deleteUserInfo());
      }
    })
  }, [])


  useEffect(() => {
    firebase
      .firestore()
      .collection(`topping/`)
      .get()
      .then((snapshot) => {
        const toppingArray = []
        snapshot.forEach((doc) => {
          toppingArray.push(doc.data())
        })
        dispatch(toppings(toppingArray[0].array))
      });

    firebase
      .firestore()
      .collection(`items/`)
      .get()
      .then((snapshot) => {
        const itemArray = []
        snapshot.forEach((doc) => {
          itemArray.push(doc.data())
        })
        dispatch(items(itemArray))
        dispatch(orderForCartInfomation(itemArray))
      });
  }, [])


  const stateContent = useSelector(getState);
  const [loginUser, setLoginUser] = useState(false);

  useEffect(() => {
    setLoginUser(stateContent);
  }, [stateContent])

  const LoginBranch = () => {
    if (loginUser === true && storage === 1) {
      // dispatch(deleteAllOrder())
      return (
        <React.Fragment>
          <Route path='/registeremail' exact>
            <Redirect to="/orderconfirm" />
          </Route>
          <Route path='/login' exact>
            <Redirect to="/orderconfirm" />
          </Route>
          <Route path='/useraccount' exact>
            <UserAccount />
          </Route>
        </React.Fragment>
      )
    } else if (loginUser === true && storage === 0) {
      return (
        <React.Fragment>
          <Route path='/registeremail' exact>
            <Redirect to="/" />
          </Route>
          <Route path='/login' exact>
            <Redirect to="/" />
          </Route>
          <Route path='/useraccount' exact>
            <UserAccount />
          </Route>
        </React.Fragment>
      )
    } else if (loginUser === false) {
      return (
        <React.Fragment>
          <Route path='/registeremail' exact>
            <RegisterEmail />
          </Route>
          <Route path='/login' exact>
            <Login />
          </Route>
          <Route path='/useraccount' exact>
            <Redirect to="/" />
          </Route>
        </React.Fragment>
      )
    }
  }

  return (
    <Router>
      <div>
        <Header />
        {/* <Link to='/termofuse'>利用規約</Link><br />
        <Link to='/resettingemail'>パスワード再設定</Link><br />
        <Link to='/registeremail'>ユーザー登録</Link><br />
        <Link to='/login'>ログイン</Link><br />
        <Link to='/useraccount'>アカウント</Link><br />
        <Link to='/ordercomplete'>完了</Link><br />
        <Link to='/orderhistory'>注文履歴</Link><br />
        <Link to='/orderconfirm'>注文確認</Link><br />
        <Link to='/cartlist'>ショッピングカート</Link><br />
        <Link to='/detail/100'>詳細画面</Link><br />
        <Link to='/'>トップページ</Link><br /> */}

        <Switch>
          <Route path='/resettingemail' exact component={ResettingEmail} />
          <Route path='/termofuse' exact component={TermOfUse} />
          <Route path='/ordercomplete' exact component={OrderComplete} />
          <Route path='/orderhistory' exact component={OrderHistory} />
          <Route path='/orderconfirm' exact component={OrderConfirm} />
          <Route path='/cartlist' exact component={CartList} />
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/" component={Home} />
          <LoginBranch />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

